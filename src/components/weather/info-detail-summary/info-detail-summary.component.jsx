import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWeatherFetchCurrent } from 'redux/weather-fetch/weather-fetch.selectors';
import { selectUnit } from 'redux/weather-unit/weather-unit.selectors';
import { toggleUnit } from 'redux/weather-unit/weather-unit.actions';

import { weatherIcon } from 'utils/weather/weather-icon';
import { fToC } from 'utils/weather/temperature-convert';

import WeatherIcon from 'components/weather/weather-icon/weather-icon.components';

import {
  InfoDetailSummaryContainer,
  SummaryIcon,
  SummaryTemp,
  WeatherIconContainer,
  Image,
  Text,
  Temp,
  Sup,
  Unit,
  CurrentUnit,
  VerticalBar,
  ToggleUnit,
} from './info-detail-summary.styles';

/* -------------------------------------------------------------------------- */

const InfoDetailSummary = ({ weatherCurrent, unit, toggleUnit }) => {
  const { summary } = weatherCurrent;
  const icon = weatherIcon(weatherCurrent);

  /**
   * type can be `temperature` or `apparentTemperature`
   * @param {String} type
   */
  const computedTempValue = type => {
    return unit === 'F' ? Math.round(weatherCurrent[type]) : fToC(weatherCurrent[type]);
  };

  const unselectedUnit = unit === 'C' ? 'F' : 'C';

  return (
    <InfoDetailSummaryContainer>
      <SummaryIcon>
        {icon.startsWith('wi') ? (
          <WeatherIconContainer>
            <WeatherIcon type={icon} />
          </WeatherIconContainer>
        ) : (
          <Image alt="icon" src={`./weather/${icon}.svg`} />
        )}

        <Text>{summary}</Text>
      </SummaryIcon>

      <SummaryTemp>
        <Temp>{computedTempValue('temperature')}</Temp>
        <Sup>
          <sup>o</sup>
        </Sup>
        <Unit>
          <CurrentUnit onClick={toggleUnit}>{unit}</CurrentUnit>
          <VerticalBar>|</VerticalBar>
          <ToggleUnit onClick={toggleUnit}>{unselectedUnit}</ToggleUnit>
        </Unit>
      </SummaryTemp>
    </InfoDetailSummaryContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  weatherCurrent: selectWeatherFetchCurrent,
  unit: selectUnit,
});

InfoDetailSummary.propTypes = {
  weatherCurrent: PropTypes.object,
  unit: PropTypes.string,
  toggleUnit: PropTypes.func,
};

export default connect(mapStateToProps, { toggleUnit })(InfoDetailSummary);
