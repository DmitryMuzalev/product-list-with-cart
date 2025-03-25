import styled from "styled-components";
import RemoveIcon from "common/icons/icon-remove-item.svg?react";

import { removeProduct } from "../../../../../model/cartSlice";

import { useCallback } from "react";
import { Info } from "common/components/Info/Info";
import { useAppDispatch } from "common/hooks";
import { CartItem } from "common/types";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: ${(props) => props.theme.border};
  border-color: ${(props) => props.theme.color.natural_100};
  column-gap: 0.5rem;
`;

const RemoveButton = styled.button`
  height: 1.125rem;
  width: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.color.natural_300};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  transition: border-color ${({ theme }) => theme.transitionDuration};
  cursor: pointer;

  svg {
    flex-shrink: 0;

    path {
      transition: fill ${({ theme }) => theme.transitionDuration};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.natural_900};

    svg path {
      fill: ${({ theme }) => theme.color.natural_900};
    }
  }
`;

function CartListItem({ id, name, price, quantity }: CartItem) {
  const dispatch = useAppDispatch();
  const handleRemove = useCallback(
    () => dispatch(removeProduct({ id })),
    [dispatch, id]
  );

  return (
    <Wrapper>
      <Info full {...{ id, name, price, quantity }} />
      <RemoveButton
        onClick={handleRemove}
        aria-label={`Remove ${name} from cart`}
      >
        <RemoveIcon />
      </RemoveButton>
    </Wrapper>
  );
}

export { CartListItem };
