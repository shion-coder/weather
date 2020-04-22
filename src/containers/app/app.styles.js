import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const background = ({ background }) => {
  return background === 'light' ? tw`bg-light` : tw`bg-dark`;
};

export const Wrapper = styled.div`
  ${tw`tracking-wider`}
  ${background}

  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

export const Body = styled.div`
  ${tw`py-10 px-4`}
`;
