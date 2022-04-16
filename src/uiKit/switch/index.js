import { StyledSwitch } from "./styled";

export default function Switch(props) {
  return (
    <StyledSwitch for="switch">
      <input
        id="switch"
        type="checkbox"
        defaultChecked={props.checked}
        onChange={props.onChange}
      />
      <span className="slider round"></span>
    </StyledSwitch>
  );
}
