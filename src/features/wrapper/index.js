import StyledWrapper from "./styled";

function Wrapper(props) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

export default Wrapper;
