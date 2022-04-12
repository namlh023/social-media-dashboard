import styled from "styled-components";

export const StyledSwitch = styled.label`
  padding: 0 15px;
  position: relative;

  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    inset: 0;
    background-color: #aeb3cb;
    border-radius: 18px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      height: 18px;
      left: 4px;
      background-color: #fff;
      border-radius: 50%;
      transition: 0.4s;
    }
  }

  input:checked + .slider {
    background: linear-gradient(225deg, #40db82 0%, #388fe7 98.02%);
  }

  input:checked + .slider:before {
    transform: translateY(-50%) translateX(16px);
  }
`;
