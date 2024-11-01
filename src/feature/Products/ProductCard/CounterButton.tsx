import IncrementIcon from "assets/icons/icon-increment-quantity.svg?react";
import DecrementIcon from "assets/icons/icon-decrement-quantity.svg?react";
import styled from "styled-components";
import { Button } from "components/UI/Button";

type CounterButtonProps = {
  increment: () => void;
  decrement: () => void;
  value: number;
};

const Wrapper = styled(Button)`
  width: 100%;
  max-width: 160px;
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

    svg {
      flex-shrink: 0;
      path {
        transition: fill ${(props) => props.theme.transitionDuration};
      }
    }

    &:hover {
      background-color: ${(props) => props.theme.color.natural_50};
      svg {
        path {
          fill: ${(props) => props.theme.color.primary};
        }
      }
    }
  }
`;

function CounterButton({ increment, decrement, value }: CounterButtonProps) {
  return (
    <Wrapper as="div">
      <button onClick={decrement}>
        <DecrementIcon />
      </button>
      <span>{value}</span>
      <button onClick={increment}>
        <IncrementIcon />
      </button>
    </Wrapper>
  );
}

export { CounterButton };
