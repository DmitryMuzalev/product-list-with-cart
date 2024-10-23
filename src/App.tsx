import { Button } from "./components/Button";
import { ProductCardButton } from "./components/ProductCardButton";

function App() {
  return (
    <div>
      <Button $primary>Confirm Order</Button>
      <br />
      <br />
      <ProductCardButton />
    </div>
  );
}

export default App;
