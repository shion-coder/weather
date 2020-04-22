import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light'
    ? tw`text-dark hover:text-light hover:bg-dark`
    : tw`text-light hover:text-dark hover:bg-light`;
};

export const SearchResultContainer = styled.p`
  ${tw`px-5 py-1 cursor-pointer`}
  ${color}

  :hover {
    opacity: 0.6;
  }
`;
