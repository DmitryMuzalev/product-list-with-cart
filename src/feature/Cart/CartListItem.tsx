import styled from "styled-components";
import RemoveIcon from "assets/icons/icon-remove-item.svg?react";

import { removeProduct } from "./cart-slice";
import { CartItemType } from "types";
import { useAppDispatch } from "redux/redux-hooks";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.color.natural_100};
  column-gap: 0.5rem;

  h3 {
    font-size: 1rem;
  }

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
const CartListItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  & > div {
    display: flex;
    column-gap: 0.5rem;
  }
`;
const Amount = styled.span`
  color: ${(props) => props.theme.color.primary};
  font-weight: ${(props) => props.theme.font.weight.bold};
  margin-right: 0.5rem;
`;
const Price = styled.span`
  color: ${(props) => props.theme.color.natural_400};
`;
const Total = styled.span`
  color: ${(props) => props.theme.color.natural_500};
  font-weight: ${(props) => props.theme.font.weight.semi_bold};
`;

function CartListItem({ name, price, quantity }: CartItemType) {
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <CartListItemInfo>
        <h3>{name}</h3>
        <div>
          <Amount>{`x${quantity}`}</Amount>
          <Price>{`@$${price?.toFixed(2)}`}</Price>
          <Total>{`$${(quantity * price)?.toFixed(2)}`}</Total>
        </div>
      </CartListItemInfo>
      <button onClick={() => dispatch(removeProduct(name))}>
        <RemoveIcon />
      </button>
    </Wrapper>
  );
}

export { CartListItem };
