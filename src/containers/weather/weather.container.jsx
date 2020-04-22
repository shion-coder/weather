import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { selectDimensionsWidth } from 'redux/dimensions/dimensions.selectors';
import { selectWeatherFetchCurrent } from 'redux/weather-fetch/weather-fetch.selectors';

import { getWeatherBackground } from 'utils/weather/weather-background';

import Info from 'components/weather/info/info.component';
import InfoDetail from 'components/weather/info-detail/info-detail.component';
import Forecast from 'containers/forecast/forecast.container';

import {
  WeatherContainer,
  WeatherDetail,
  Background,
  BackgroundSvg,
  Content,
  ForecastMobile,
  Powered,
  Reference,
} from './weather.styles';

/* -------------------------------------------------------------------------- */

const Weather = ({ theme, dimensionsWidth, weatherCurrent }) => {
  const { icon } = weatherCurrent;
  const weatherBackground = getWeatherBackground(weatherCurrent);
  const weatherSVG = icon === 'snow' ? 'snow' : 'rain';
  const WET_TYPES = ['rain', 'snow', 'sleet', 'hail'];

  return (
    <WeatherContainer>
      <WeatherDetail color={theme}>
        <Background color={theme} alt="Weather Background" src={`./weather-backgrounds/${weatherBackground}.jpg`} />
        {/* Show rain or snow svg only when weather icon exist in WET_TYPES */}
        {WET_TYPES.includes(icon) && (
          <BackgroundSvg color={theme} alt="SVG" src={`./weather-backgrounds/${weatherSVG}.svg`} />
        )}

        {dimensionsWidth >= 768 ? (
          <Content>
            <Info />
            <InfoDetail />
            <Forecast />
          </Content>
        ) : (
          <>
            <Content>
              <Info />
              <InfoDetail />
            </Content>

            <ForecastMobile>
              <Forecast />
            </ForecastMobile>
          </>
        )}
      </WeatherDetail>

      <Powered color={theme}>
        Powered by&nbsp;
        <Reference href="https://darksky.net" target="_blank">
          Dark Sky
        </Reference>
      </Powered>
    </WeatherContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  dimensionsWidth: selectDimensionsWidth,
  weatherCurrent: selectWeatherFetchCurrent,
});

Weather.propTypes = {
  theme: PropTypes.string,
  dimensionsWidth: PropTypes.number,
  weatherCurrent: PropTypes.object,
};

export default connect(mapStateToProps)(Weather);
