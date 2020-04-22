import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

const background = ({ background }) => {
  return background === 'light' ? tw`bg-light` : tw`bg-dark`;
};

export const ErrorContainer = styled.div`
  ${tw`relative w-5/6 md:w-1/2 xl:max-w-5xl border border-red-500 text-red-500 mt-5 px-4 py-2 rounded`}
  ${background}
`;

export const Message = styled.span`
  ${tw`text-sm break-words`}
`;

export const ButtonContainer = styled.span`
  ${tw`absolute ml-3 mr-1 py-3`}

  top: -3px;
  right: 5px;
`;

export const CloseButton = styled.svg`
  ${tw`fill-current h-5 w-5`}
`;
