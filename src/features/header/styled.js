import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  .title {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .mode {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .mode {
      width: unset;
      gap: 16px;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.text2};

  @media (min-width: 992px) {
    font-size: 28px;
    line-height: 34px;
  }
`;

export const StyledText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.text1};
`;

export const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.line};
`;
