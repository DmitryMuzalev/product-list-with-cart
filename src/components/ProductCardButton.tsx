import CartIcon from "../assets/icons/icon-add-to-cart.svg";
import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

const ProductCardButton = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return <>{!counter ? <AddToCart /> : <Counter />}</>;
};

function AddToCart() {
  return (
    <Button $outline>
      <img src={CartIcon} alt="cart" />
      <span>Add to Cart</span>
    </Button>
  );
}

export { ProductCardButton, AddToCart };
