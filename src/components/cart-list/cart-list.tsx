import "./cart-list.css";
import { CartItem } from "../cart-item";

export const CartList: React.FC = () => {
  return (
    <div className="b-cart-list">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};
