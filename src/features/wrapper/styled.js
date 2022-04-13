import styled from "styled-components";

const StyledWrapper = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.bg};
`;

export default StyledWrapper;
