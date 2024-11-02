import styled from "styled-components";
import RemoveIcon from "assets/icons/icon-remove-item.svg?react";

import { removeProduct } from "./cart-slice";
import { CartItemType } from "types";
import { useAppDispatch } from "redux/redux-hooks";
import { ItemInfo } from "components/ItemInfo";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.color.natural_100};
  column-gap: 0.5rem;

  button {
    height: 1.125rem;
    width: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background-color: transparent;
    border: 3px solid ${(props) => props.theme.color.natural_300};
    border-radius: ${(props) => props.theme.borderRadius.circle};
    transition: border-color ${(props) => props.theme.transitionDuration};
    svg {
      flex-shrink: 0;
      path {
        transition: all ${(props) => props.theme.transitionDuration};
      }
    }

    &:hover {
      border-color: ${(props) => props.theme.color.natural_900};
      svg {
        path {
          fill: ${(props) => props.theme.color.natural_900};
        }
      }
    }
  }
`;

function CartListItem({ name, price, quantity }: CartItemType) {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <ItemInfo full {...{ name, price, quantity }} />
      <button onClick={() => dispatch(removeProduct(name))}>
        <RemoveIcon />
      </button>
    </Wrapper>
  );
}

export { CartListItem };
