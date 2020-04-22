import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const check = ({ color, index, selectedIndex }) => {
  const textAndBackground =
    color === 'light' ? tw`text-light bg-dark md:border-dark` : tw`text-dark bg-light md:border-light`;

  return index === selectedIndex ? textAndBackground : null;
};

const border = ({ index, selectedIndex }) => {
  return tw`md:border-r${index === 7 || index === selectedIndex - 1 ? '-0' : ''} md:border-l${
    index === 0 || index === selectedIndex + 1 ? '-0' : ''
  }`;
};

export const DayContainer = styled.div`
  ${tw`md:border-t md:border-b-0 md:border-light md:hover:border-light md:hover:bg-light md:hover:text-black items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2`}
  ${check} ${border}
`;

export const Time = styled.div`
  ${tw`flex w-1/6 sm:w-full sm:justify-center text-base font-light sm:font-medium`}
`;

export const Icon = styled.div`
  ${tw`flex w-1/6 sm:w-full`}
`;

export const WeatherIconContainer = styled.div`
  ${tw`my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl`}
`;

export const Image = styled.img`
  ${tw`sm:-mt-3 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain`}
`;

export const Temperature = styled.div`
  ${tw`flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0`}
`;

export const HighTemp = styled.div`
  ${tw`mx-2 text-xs sm:text-sm`}
`;

export const LowTemp = styled.div`
  ${tw`mx-2 text-xs`}
`;

export const Suns = styled.div`
  ${tw`flex flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1`}
`;

export const Sun = styled.div`
  ${tw`flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm`}
`;

export const Sunrise = styled.p`
  ${tw`text-xl lg:text-2xl text-sun mr-2 md:mr-3`}
`;

export const Sunset = styled.p`
  ${tw`text-xl lg:text-2xl text-sun mr-2 md:mr-1`}
`;

export const SunTime = styled.p``;
