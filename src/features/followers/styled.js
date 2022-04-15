import styled from "styled-components";

export const StyledFollower = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;

  .header {
    img {
      width: 24px;
      height: 24px;
    }

    .name {
      font-weight: 700;
      font-size: 12px;
      color: ${({ theme }) => theme.text1};
    }
  }

  .h2-like {
    font-weight: 800;
    font-size: 56px;
    line-height: 48px;
    letter-spacing: -2px;
    color: ${({ theme }) => theme.text2};
  }

  .p-like {
    font-size: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.text1};
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
