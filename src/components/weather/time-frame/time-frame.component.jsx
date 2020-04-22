import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { selectUnit } from 'redux/weather-unit/weather-unit.selectors';

import { fToC } from 'utils/weather/temperature-convert';
import { formatTime } from 'utils/weather/format-time';
import { weatherIcon } from 'utils/weather/weather-icon';

import WeatherIcon from 'components/weather/weather-icon/weather-icon.components';

// Styled
import {
  TimeFrameContainer,
  Icon,
  WeatherIconContainer,
  Image,
  Temperature,
  ApparentTemperature,
  Time,
} from './time-frame.styles';

/* -------------------------------------------------------------------------- */

const TimeFrame = ({ theme, unit, timeframe }) => {
  const { time, timezone } = timeframe;
  /**
   * type can be `temperature` or `apparentTemperature`
   * @param {String} type
   */
  const computedTempValue = type => {
    return unit === 'F' ? Math.round(timeframe[`${type}`]) : fToC(timeframe[`${type}`]);
  };

  const iconFrame = weatherIcon(timeframe);

  return (
    <TimeFrameContainer color={theme}>
      <Icon>
        {iconFrame.startsWith('wi') ? (
          <WeatherIconContainer>
            <WeatherIcon type={iconFrame} />
          </WeatherIconContainer>
        ) : (
          <Image alt="icon" src={`./weather/${iconFrame}.svg`} />
        )}
      </Icon>

      <Temperature>
        {computedTempValue('temperature')}
        <sup>o</sup>
      </Temperature>

      <ApparentTemperature>
        {computedTempValue('apparentTemperature')}
        <sup>o</sup>
      </ApparentTemperature>

      <Time>{formatTime(time, timezone, 'h:mm A')}</Time>
    </TimeFrameContainer>
  );
};

/* -------------------------------------------------------------------------- */
const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  unit: selectUnit,
});

TimeFrame.propTypes = {
  theme: PropTypes.string,
  unit: PropTypes.string,
  timeframe: PropTypes.object,
};

export default connect(mapStateToProps)(TimeFrame);
