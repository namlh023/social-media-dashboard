import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${(theme) => theme.text2};

  @media (min-width: 1440px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const StyledText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(theme) => theme.text1};
`;
