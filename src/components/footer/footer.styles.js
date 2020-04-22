import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

const background = ({ color }) => {
  return color === 'light' ? '#e8ebee' : '#292929';
};

export const FooterContainer = styled.div`
  ${tw`px-5 py-5 flex justify-center items-center text-sm`}
  ${color}

  background-color: ${background};
`;

export const Span = styled.span`
  ${tw`px-2`}
`;
