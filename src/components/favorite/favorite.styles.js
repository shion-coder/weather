import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light'
    ? tw`text-light hover:text-light bg-light hover:bg-dark`
    : tw`text-light hover:text-dark bg-dark hover:bg-light`;
};

export const Wrapper = styled.div`
  ${tw`relative w-full h-16`}
`;

export const FavoriteContainer = styled.div`
  ${tw`py-3 lg:pt-1/2 font-semibold rounded-2xl cursor-pointer text-center justify-center`}
  ${color}

  background-color: rgba(0,0,0,0.7);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;
