import "./cart-item.css";
import { CounterItem } from "../counter-item";
import {Btn} from "../btn";
export const CartItem: React.FC = () => {
  return (
    <div className="b-cart-item">
      <div className="cart-item__inner">
            <div className="cart-item__title">
              Ottoto Bellona Tortoise w/Gold($1,236$1,111.20)
            </div>
        <div className="cart-item__body">
          <div className="cart-item__goods-view">
            <img src="../../img/w=400,h=200,fit=fill,bg=fff.webp" alt="" />
          </div>
          <div className="cart-item__panel">
            <div className="cart-item__fields">
              <div className="cart-item__field">
                <div className="cart-item__field-title">Quantity:</div>
                <CounterItem />
                <Btn />
              </div>
              <div className="cart-item__field">
                <div className="cart-item__field-title">Frame:</div>
                <div className="cart-item__field-content">
                  Tortoise / Gold, Large($104)
                </div>
              </div>
              <div className="cart-item__field">
                <div className="cart-item__field-title">Lens type:</div>
                <div className="cart-item__field-content">
                  Distance & Reading <a className="cart-item__link" href="#">View Prescription</a>
                </div>
              </div>
              <div className="cart-item__field">
                <div className="cart-item__field-title">Lnes Package:</div>
                <div className="cart-item__field-content">
                  1.6 Index Thin Lenses - ClearBright®, Scratch Resistant Coating, UV Protective Coating (UV400), Premium Anti-Reflective Coating, FREE Prescription Card($229)
                </div>
              </div>
              <div className="cart-item__field">
                <div className="cart-item__field-title">Photochromic:</div>
                <div className="cart-item__field-content">
                  Transitions® (Light Adjusting) Gray($169)
                </div>
              </div>
              <div className="cart-item__field">
                <div className="cart-item__field-title">Upgrades:</div>
                <div className="cart-item__field-content">
                  Blue Light Lenses ($49), 2-Year of enhanced coverage ($67)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
