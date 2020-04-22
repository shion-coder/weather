import styled, { css } from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark border-dark` : tw`text-light border-light`;
};

const background = ({ color }) => {
  return color === 'light' ? 'bg-light' : 'bg-dark';
};

const weatherBackground = css`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  @media (max-width: 767px) {
    min-height: 24rem;
  }

  @media (min-width: 768px) {
    height: 36rem;
  }
`;

export const WeatherContainer = styled.div`
  ${tw`flex flex-col justify-center items-center lg:px-5 pt-10`}
`;

export const WeatherDetail = styled.div`
  ${tw`sm:w-full lg:w-5/6 xl:max-w-6xl border md:border-none rounded-t-2xl shadow-lg relative overflow-hidden`}
  ${color} ${background}
`;

export const Background = styled.img`
  ${tw`w-full object-cover object-center`}
  ${weatherBackground}
`;

export const BackgroundSvg = styled.img`
  ${tw`w-full object-cover object-center absolute top-0 right-0 bottom-0 left-0`}
  ${weatherBackground}
`;

export const Content = styled.div`
  ${tw`absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light`}

  background-color: rgba(0,0,0,0.2);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const ForecastMobile = styled.div``;

export const Powered = styled.p`
  ${tw`pt-4 text-xs font-light`}
  ${color} ${background}
`;

export const Reference = styled.a`
  ${tw`z-0 font-medium`}
`;
