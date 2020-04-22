import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDimensionsWidth } from 'redux/dimensions/dimensions.selectors';
import { selectWeatherFetchCurrent, selectWeatherFetchForecast } from 'redux/weather-fetch/weather-fetch.selectors';

import Carousel from 'nuka-carousel';
import { isEmpty, isUndefined } from 'lodash-es';

import { CarouselSettings } from 'config/carousel-settings';

import { formatTime } from 'utils/weather/format-time';

import TimeFrame from 'components/weather/time-frame/time-frame.component';
import Day from 'components/weather/day/day.component';

import { TimeFrames, Days } from './forecast.styles';

/* -------------------------------------------------------------------------- */

const Forecast = ({ dimensionsWidth, weatherCurrent, weatherForecast }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const { time, timezone } = weatherCurrent;
  const { days, timeFrames } = weatherForecast;
  const today = formatTime(time, timezone, 'MM/DD/YYYY');

  const selectedDayIndexHandler = useCallback(
    selectedDay => {
      const index = Object.keys(days).indexOf(selectedDay);
      setSelectedDayIndex(index !== -1 ? index : 0);
    },
    [days],
  );

  /**
   * day is a date '02/28/2020'
   * @param {String} day
   */
  const daySelectHandler = day => {
    setSelectedDay(day);
    selectedDayIndexHandler(day);
  };

  useEffect(() => {
    if (!isEmpty(weatherForecast) && !isUndefined(weatherForecast)) {
      setSelectedDay(days[today] ? today : '');
      selectedDayIndexHandler(days[today] ? today : '');
    }
  }, [weatherForecast, days, today, selectedDayIndexHandler]);

  return (
    <>
      {dimensionsWidth >= 768 ? (
        <TimeFrames>
          {timeFrames[selectedDay] && (
            <Carousel {...CarouselSettings('time', 'tablet')}>
              {timeFrames[selectedDay].map((timeframe, index) => (
                <TimeFrame timeframe={timeframe} key={index} />
              ))}
            </Carousel>
          )}
        </TimeFrames>
      ) : (
        <div className="pb-3">
          {timeFrames[selectedDay] && (
            <Carousel {...CarouselSettings('time')}>
              {timeFrames[selectedDay].map((timeframe, index) => (
                <TimeFrame timeframe={timeframe} key={index} />
              ))}
            </Carousel>
          )}
        </div>
      )}

      <Days>
        {Object.keys(weatherForecast.days).map((day, index) => {
          return (
            <Day
              day={weatherForecast.days[day]}
              key={index}
              index={index}
              selectedIndex={selectedDayIndex}
              selectedDay={() => daySelectHandler(day)}
            />
          );
        })}
      </Days>
    </>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  dimensionsWidth: selectDimensionsWidth,
  weatherCurrent: selectWeatherFetchCurrent,
  weatherForecast: selectWeatherFetchForecast,
});

Forecast.propTypes = {
  dimensionsWidth: PropTypes.number,
  weatherCurrent: PropTypes.object,
  weatherForecast: PropTypes.object,
};

export default connect(mapStateToProps)(Forecast);
