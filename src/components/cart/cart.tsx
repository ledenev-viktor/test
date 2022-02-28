import "./cart.css";
import { CartList } from "../cart-list";
import { CartTotal } from "../cart-total";
import { AdditionalGoods } from "../additional-goods";
export const Cart: React.FC = () => {
  return (
    <div className="b-cart">
      <h1>Shopping cart</h1>
      <div className="cart__cols">
        <div className="cart__col cart__col--left">
          <CartList />
        </div>
        <div className="cart__col cart__col--right">
          <CartTotal />
        </div>
      </div>
      <AdditionalGoods />
    </div>
  );
};
