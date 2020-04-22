import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

export const InfoDetailSummaryContainer = styled.div`
  ${tw`flex flex-row justify-between sm:justify-start sm:w-full lg:w-1/2`}
`;

export const SummaryIcon = styled.div`
  ${tw`flex flex-col justify-center items-center`}
`;

export const SummaryTemp = styled.div`
  ${tw`flex justify-start items-center sm:-mt-3 sm:ml-3`}
`;

export const WeatherIconContainer = styled.p`
  ${tw`text-6xl sm:mx-2 mt-2`}
`;

export const Text = styled.p`
  ${tw`hidden sm:flex font-medium -mt-2 ml-3 capitalize`}
`;

export const Image = styled.img`
  ${tw`-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain`}
`;

export const Temp = styled.span`
  ${tw`text-6xl font-bold`}
`;

export const Sup = styled.div`
  ${tw`-mt-8 text-3xl`}
`;

export const Unit = styled.div`
  ${tw`-mt-10 mx-2 text-xl`}
`;

export const CurrentUnit = styled.span`
  ${tw`cursor-pointer font-bold`}
`;

export const VerticalBar = styled.span`
  ${tw`mx-1 opacity-25`}
`;

export const ToggleUnit = styled.span`
  ${tw`cursor-pointer font-light opacity-75`}
`;
