import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled.div`
  ${tw`hidden sm:flex justify-center items-center`}
`;

export const Container = styled.div`
  ${tw`sm:w-5/6 xl:max-w-6xl px-5 py-5 flex sm:flex-row flex-wrap justify-center`}
`;

export const FavoriteContainer = styled.div`
  ${tw`m-2 sm:w-1/2 md:w-1/4`}
`;
