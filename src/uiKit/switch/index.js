import { StyledSwitch } from "./styled";

export default function Switch(props) {
  return (
    <StyledSwitch>
      <input
        type="checkbox"
        defaultChecked={props.checked}
        onChange={props.onChange}
      />
      <span className="slider round"></span>
    </StyledSwitch>
  );
}
