import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { selectUnit } from 'redux/weather-unit/weather-unit.selectors';

import { fToC } from 'utils/weather/temperature-convert';
import { weatherIcon } from 'utils/weather/weather-icon';
import { formatTime } from 'utils/weather/format-time';

import WeatherIcon from 'components/weather/weather-icon/weather-icon.components';

import {
  DayContainer,
  Time,
  Icon,
  WeatherIconContainer,
  Image,
  Temperature,
  HighTemp,
  LowTemp,
  Suns,
  Sun,
  Sunrise,
  Sunset,
  SunTime,
} from './day.styles';

/* -------------------------------------------------------------------------- */

const Day = ({ day, index, selectedIndex, selectedDay, theme, unit }) => {
  const { time, timezone } = day;
  const date = formatTime(time, timezone, 'ddd');

  const icon = weatherIcon(day);
  /**
   * Type can be 'High' or 'Low'
   * @param {String} type
   */
  const computedTempValue = type => {
    return unit === 'F' ? Math.round(day[`temperature${type}`]) : fToC(day[`temperature${type}`]);
  };

  return (
    <DayContainer color={theme} index={index} selectedIndex={selectedIndex} onClick={() => selectedDay({ day })}>
      <Time>{date}</Time>

      <Icon>
        {weatherIcon(day).startsWith('wi') ? (
          <WeatherIconContainer>
            <WeatherIcon type={icon} />
          </WeatherIconContainer>
        ) : (
          <Image alt="icon" src={`./weather/${icon}.svg`} />
        )}
      </Icon>

      <Temperature>
        <HighTemp>
          {computedTempValue('High')}
          <sup>o</sup>
        </HighTemp>

        <LowTemp>
          {computedTempValue('Low')}
          <sup>o</sup>
        </LowTemp>
      </Temperature>

      <Suns>
        <Sun>
          <Sunrise>
            <WeatherIcon type="sunrise" />
          </Sunrise>

          <SunTime>{formatTime(day.sunriseTime, day.timezone, 'h:mm')}</SunTime>
        </Sun>

        <Sun>
          <Sunset>
            <WeatherIcon type="sunset" />
          </Sunset>
          <SunTime>{formatTime(day.sunsetTime, day.timezone, 'HH:mm')}</SunTime>
        </Sun>
      </Suns>
    </DayContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  unit: selectUnit,
});

Day.propTypes = {
  theme: PropTypes.string,
  unit: PropTypes.string,
  day: PropTypes.object,
  index: PropTypes.number,
  selectedDay: PropTypes.func,
  selectedIndex: PropTypes.number,
};

export default connect(mapStateToProps)(Day);
