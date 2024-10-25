import { AddProductButton } from "./AddProductButton";
import { CounterButton } from "./CounterButton";

type ProductCardButtonProps = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

const ProductCardButton = ({
  counter,
  increment,
  decrement,
}: ProductCardButtonProps) => {
  return (
    <>
      {!counter ? (
        <AddProductButton cb={increment} />
      ) : (
        <CounterButton
          increment={increment}
          decrement={decrement}
          value={counter}
        />
      )}
    </>
  );
};

export { ProductCardButton };
