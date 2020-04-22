import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

export const IconSearchbarContainer = styled.span`
  ${tw`opacity-75 text-xl`}
  ${color}
`;
