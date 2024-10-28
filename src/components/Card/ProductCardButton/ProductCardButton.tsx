import { useState } from "react";
import { AddProductButton } from "./AddProductButton";
import { CounterButton } from "./CounterButton";

const ProductCardButton = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

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
