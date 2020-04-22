import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const color = ({ color }) => {
  return color === 'light' ? tw`text-dark` : tw`text-light`;
};

const border = ({ showData }) => {
  return showData ? tw`rounded-t-2xl` : tw`rounded-2xl`;
};

const background = ({ color }) => {
  return color === 'light' ? '#e2e8f0' : '#3a3a3a';
};

export const SearchContainer = styled.div`
  ${tw`relative h-12 w-5/6 md:w-1/2 xl:max-w-5xl`}
`;

export const IconContainer = styled.div`
  ${tw`absolute top-0 left-0 ml-5`}

  margin-top: 0.9rem;
`;

export const Input = styled.input`
  ${tw`text-sm h-12 appearance-none w-full py-3 pl-16 pr-6 mb-5 focus:outline-none truncate`}
  ${color} ${border}
  
  background-color: ${background};
  letter-spacing: 0.05em;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.1), 0 0 2px 0 rgba(0,0,0,0.06);

  ::placeholder {
    ${color}
    opacity: 0.5;
  }
`;

export const CaretContainer = styled.div`
  ${tw`flex absolute right-0 top-0 mr-4 cursor-pointer`}

  margin-top: 0.9rem;
`;
