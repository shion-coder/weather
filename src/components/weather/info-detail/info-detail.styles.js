import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

export const InfoDetailContainer = styled.div`
  ${tw`sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4`}
`;

export const OtherInfo = styled.div`
  ${tw`flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2`}
`;
