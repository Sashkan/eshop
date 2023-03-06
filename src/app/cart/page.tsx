import { CartContent } from "~/components/CartContent";
import { CartPrice } from "~/components/CartPrice";
import Checkout from "~/components/Checkout";

const CartPage = () => {
  return (
    <div>
      <CartContent />
      <CartPrice />
      <Checkout />
    </div>
  );
};

export default CartPage;
