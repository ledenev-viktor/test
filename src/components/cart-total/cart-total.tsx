import './cart-total.css';

export const CartTotal: React.FC = () => {
    return (
        <div className="b-cart-total">
                <div className="cart-total__title">Total</div>
            <div className="cart-total__fields">
                <div className="b-form-coupon">
                    <form action="">
                        <label>
                            <input className="form-coupon__input" placeholder="Coupon" type="text" />
                        </label>
                        <button className="form-coupon__btn">Apply</button>
                    </form>
                </div>
                <div className="cart-total__field">
                    <div className="cart-total__name">Subtotal <span className="b-counter-items">(3 items)</span></div>
                    <div className="cart-total__value">$1,440</div>
                </div>
                <div className="cart-total__field">
                    <div className="cart-total__name">Discount <span className="b-counter-items">(3 items)</span></div>
                    <div className="cart-total__value">$240</div>
                </div>
                <div className="cart-total__field">
                    <div className="cart-total__name">Grand total <span className="b-counter-items">(3 items)</span></div>
                    <div className="cart-total__value">$1,440</div>
                </div>
                <div className="b-cart-clear">
                    <a href="#">Clear cart</a>
                </div>
            </div>
        </div>
    )
}