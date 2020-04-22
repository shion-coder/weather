import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

export const TimeFrameContainer = styled.div`
  ${tw`border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light md:text-light`}
  ${color}
`;

export const Icon = styled.div``;

export const WeatherIconContainer = styled.div`
  ${tw`text-5xl mt-4`}
`;

export const Image = styled.img`
  ${tw`w-16 h-16 object-contain`}
`;

export const Temperature = styled.div`
  ${tw`text-lg`}
`;

export const ApparentTemperature = styled.div`
  ${tw`text-sm`}
`;

export const Time = styled.p`
  ${tw`text-sm font-medium`}
`;
