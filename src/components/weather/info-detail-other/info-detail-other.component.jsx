import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeatherFetchCurrent } from 'redux/weather-fetch/weather-fetch.selectors';
import { selectUnit } from 'redux/weather-unit/weather-unit.selectors';

import { FiPercent } from 'react-icons/fi';

import { fToC } from 'utils/weather/temperature-convert';
import { mToK } from 'utils/weather/speed-convert';
import { windDirection } from 'utils/weather/wind-direction';

import WeatherIcon from 'components/weather/weather-icon/weather-icon.components';

import {
  InfoDetailOtherContainer,
  Wrapper,
  Humidity,
  Wind,
  Feel,
  Name,
  Value,
  Percent,
  Icon,
  Sup,
} from './info-detail-other.styles';

/* -------------------------------------------------------------------------- */

const InfoDetailOther = ({ weatherCurrent, unit }) => {
  const { humidity, windBearing } = weatherCurrent;
  /**
   * type can be `temperature` or `apparentTemperature`
   * @param {String} type
   */
  const computedTempValue = type => {
    return unit === 'F' ? Math.round(weatherCurrent[type]) : fToC(weatherCurrent[type]);
  };

  const computedSpeedValue = () => {
    return unit === 'F' ? `${Math.round(weatherCurrent.windSpeed)} mph` : `${mToK(weatherCurrent.windSpeed)} kmph`;
  };

  return (
    <InfoDetailOtherContainer>
      <Wrapper>
        <Humidity>
          <Name>Humidity:&nbsp;</Name>
          <Value>{Math.round(humidity)}</Value>
          <Percent>
            <FiPercent />
          </Percent>
        </Humidity>

        <Wind>
          <Name>Wind:&nbsp;</Name>
          <Value>{computedSpeedValue()} </Value>
          <Icon>
            <WeatherIcon type={windDirection(windBearing)} />
          </Icon>
        </Wind>

        <Feel>
          <Name>Feels like:&nbsp;</Name>
          <Value>{computedTempValue('apparentTemperature')}</Value>
          <Sup>o</Sup>
        </Feel>
      </Wrapper>
    </InfoDetailOtherContainer>
  );
};

/* -------------------------------------------------------------------------- */
const mapStateToProps = createStructuredSelector({
  weatherCurrent: selectWeatherFetchCurrent,
  unit: selectUnit,
});

InfoDetailOther.propTypes = {
  weatherCurrent: PropTypes.object,
  unit: PropTypes.string,
};

export default connect(mapStateToProps)(InfoDetailOther);
