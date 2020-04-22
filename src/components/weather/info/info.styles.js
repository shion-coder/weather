import styled from 'styled-components';
import tw from 'tailwind.macro';

/* -------------------------------------------------------------------------- */

export const InfoContainer = styled.div`
  ${tw`flex justify-between`}
`;

export const TimeContainer = styled.div`
  ${tw`pt-4 px-4`}
`;

export const BookmarkContainer = styled.div`
  ${tw`mt-6 mr-4 cursor-pointer text-xl`}
`;

export const City = styled.p`
  ${tw`font-bold`}
`;

export const Time = styled.div`
  ${tw`sm:flex-col md:flex md:flex-row font-light`}
`;

export const Paragraph = styled.p``;

export const Span = styled.span`
  ${tw`hidden md:block`}
`;
