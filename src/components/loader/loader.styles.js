import styled, { keyframes } from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const bounce = keyframes`
  0%,

  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

const fade = keyframes`
  0%,

  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
`;

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

export const Container = styled.div`
  ${tw`flex flex-col w-full justify-center items-center`}
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 20px auto 10px auto;
`;

export const Bounce = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #00c3b3;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s ${props => (props.delay ? '-1s' : null)} infinite ease-in-out;
`;

export const Text = styled.div`
  ${tw`mx-auto mt-4 text-center text-sm font-light`}
  ${color}

  letter-spacing: 0.15rem;
  animation: ${fade} 1.2s ease-in-out 0.2s infinite;
`;
