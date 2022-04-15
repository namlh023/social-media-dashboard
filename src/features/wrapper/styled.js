import styled from "styled-components";

const StyledWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.bg};

  display: flex;
  justify-content: center;
  align-items: center;

  .inner-wrapper {
    max-width: 1070px;
  }
`;

export default StyledWrapper;
