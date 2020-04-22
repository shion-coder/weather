import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

const background = ({ color }) => {
  return color === 'light' ? '#e2e8f0' : '#3a3a3a';
};

export const AutoCompleteContainer = styled.div`
  ${tw`flex flex-col items-center`}
`;

export const SearchResults = styled.div`
  ${tw`w-5/6 md:w-1/2 xl:max-w-5xl border-transparent rounded-b-2xl`}
  ${color}

  background-color: ${background};
  max-height: 290px;
  overflow-y: auto;
`;
