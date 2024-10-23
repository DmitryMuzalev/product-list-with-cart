import IncrementIcon from "../assets/icons/icon-increment-quantity.svg";
import DecrementIcon from "../assets/icons/icon-decrement-quantity.svg";
import styled from "styled-components";
import { Button } from "./Button";

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  color: ${(props) => props.theme.color.natural_50};

  button {
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: ${(props) => props.theme.border};
    border-color: ${(props) => props.theme.color.natural_50};
    border-radius: ${(props) => props.theme.borderRadius.circle};
    transition: all ${(props) => props.theme.transitionDuration};

    &:hover {
      background-color: ${(props) => props.theme.color.natural_50};
    }
  }
`;

function Counter() {
  return (
    <Wrapper as="div">
      <button>
        <img src={DecrementIcon} alt="" />
      </button>
      <span>1</span>
      <button>
        <img src={IncrementIcon} alt="" />
      </button>
    </Wrapper>
  );
}

export { Counter };
