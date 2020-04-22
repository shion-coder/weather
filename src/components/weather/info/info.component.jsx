import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAddress, selectLatlong } from 'redux/address-fetch/address-fetch.selectors';
import { selectWeatherFetchCurrent } from 'redux/weather-fetch/weather-fetch.selectors';
import { favoritesSelector } from 'redux/favorites/favorites.selectors';
import { toggleFavorite } from 'redux/favorites/favorites.actions';

import moment from 'moment-timezone';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import { InfoContainer, TimeContainer, BookmarkContainer, City, Time, Paragraph, Span } from './info.styles';

/* -------------------------------------------------------------------------- */

const Info = ({ weatherCurrent, address: { name, fullName }, latlong, favorites, toggleFavorite }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const formattedDateTimeRef = useRef();

  const datetimeSetter = dateObj => {
    setDate(dateObj ? dateObj.format('MMMM Do, YYYY') : '');
    setTime(dateObj ? dateObj.format('dddd h:mm A') : '');

    formattedDateTimeRef.current = dateObj || null;
  };

  const isBookmarked = () => {
    const matched = favorites?.filter(favorite => favorite.name === name);

    return matched?.length > 0;
  };

  useEffect(() => {
    const { time, timezone } = weatherCurrent;
    datetimeSetter(moment(time * 1000).tz(timezone));

    const dateTimer = setInterval(() => {
      if (time) {
        // Update date and time every second only when there is a valid timestamp
        const formattedDateTimeObj = moment.tz(formattedDateTimeRef.current, timezone).add(1, 's');

        datetimeSetter(formattedDateTimeObj);
      }
    }, 1000);

    return () => {
      clearInterval(dateTimer);
    };
  }, [weatherCurrent]);

  return (
    <InfoContainer>
      <TimeContainer>
        <City>{fullName}</City>

        {date && time && (
          <Time>
            <Paragraph>{date}</Paragraph>
            <Span>&nbsp;|&nbsp;</Span>
            <Paragraph>{time}</Paragraph>
          </Time>
        )}
      </TimeContainer>

      <BookmarkContainer onClick={() => toggleFavorite({ name, fullName, latlong })}>
        {isBookmarked() ? <FaHeart /> : <FaRegHeart />}
      </BookmarkContainer>
    </InfoContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  weatherCurrent: selectWeatherFetchCurrent,
  address: selectAddress,
  latlong: selectLatlong,
  favorites: favoritesSelector,
});

Info.propTypes = {
  weatherCurrent: PropTypes.object,
  address: PropTypes.object,
  latlong: PropTypes.string,
  favorites: PropTypes.array,
};

export default connect(mapStateToProps, { toggleFavorite })(Info);
