import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

export const InfoDetailOtherContainer = styled.div`
  ${tw`flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2`}
`;

export const Wrapper = styled.div`
  ${tw`text-sm sm:text-lg ml-8`}
`;

export const Humidity = styled.p`
  ${tw`flex flex-row sm:my-2`}
`;

export const Wind = styled.p`
  ${tw`flex items-center sm:my-2`}
`;

export const Feel = styled.p``;

export const Name = styled.span`
  ${tw`font-light`}
`;

export const Value = styled.span`
  ${tw`font-bold`}
`;

export const Percent = styled.span`
  ${tw`text-sm mt-2`}
`;

export const Icon = styled.span`
  ${tw`text-3xl`}
`;

export const Sup = styled.sup``;
