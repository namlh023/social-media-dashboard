import styled from "styled-components";

export const StyledOverview = styled.section`
  .h3-like {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.text1};
    margin-bottom: 32px;
  }
  .p-like {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.text1};
  }

  .number {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: ${({ theme }) => theme.text2};
  }

  .up {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.numberUp};
  }

  .down {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.numberDown};
  }
`;
