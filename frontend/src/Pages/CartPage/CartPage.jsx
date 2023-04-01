import React, { useEffect } from "react";
import "./CartPage.css";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CartPage = () => {
  // const [allCart, setAllCart] = React.useState([]);
  const store = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => { };

  // "https://buy.stripe.com/test_28o6qF8JD0lp4XS9AA"

  // const getAllCartItem = () => {
  //   axios
  //     .get(`http://localhost:7700/carts/`)
  //     .then((res) => {
  //       setAllCart(res.data);
  //       console.log("allCart", allCart)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    // getAllCartItem();
    console.log("cartstore", store)
  }, []);
  return (
    <div>
      <div className="cartPage-wrapper">
        <div className="cartpage-container">
          <div className="cartpage-lr">
            <div className="cartpage-left-cont">
              <div className="cartpage-left-heading">
                <h3>Basket</h3>
                <a href="/#">Delivery Order</a>
              </div>
              <hr style={{ border: "1px solid #5c5c5f" }} />
              <div className="cartpage-left-title">
                <div>Item</div>
                <div>Item Price</div>
                <div>Quantity</div>
                <div>Total Price</div>
              </div>
              <hr style={{ border: "1px solid #5c5c5f" }} />
              <div>
                <PaymentCard />
                <PaymentCard />
                <PaymentCard />
                <PaymentCard />
              </div>
            </div>
            <div className="cartpage-right-cont">
              <div className="cartpage-right-heading">
                <span> ORDER SUMMARY</span>
                <span>800.01.123</span>
              </div>
              <div className="cartpage-right-container">
                <div className="cartpage-right-top">
                  <div>
                    <span>Subtotal</span>
                    <span>$ 220.00</span>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <span>TBD</span>
                  </div>
                  <div>
                    <span>Estimated Tax</span>
                    <span>$ 0.00</span>
                  </div>
                  <div>
                    <span style={{ color: "black" }}>Total</span>
                    <span>$ 220.00</span>
                  </div>
                </div>
                <div>
                  <div>Or 4 interest-free installments of $55.00 with </div>
                  <div>Klarna or afterpay</div>
                </div>
                <a href="#/">
                  <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
                </a>

                <div className="paypal-btn">
                  <button>
                    <img
                      src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
