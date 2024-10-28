import styled from "styled-components";

import CarbonNeutralIcon from "../../../assets/icons/icon-carbon-neutral.svg?react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.natural_50};
  border-radius: ${(props) => props.theme.borderRadius.small};
  column-gap: 0.5rem;

  svg {
    flex-shrink: 0;
  }
`;

function OrderMessage() {
  return (
    <Wrapper>
      <CarbonNeutralIcon />
      <p>
        This is a <b>carbon-neutral</b> delivery
      </p>
    </Wrapper>
  );
}

export { OrderMessage };
