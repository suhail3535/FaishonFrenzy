import React, { useEffect, useState } from "react";
import "./CartPage.css";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllCart } from "../../Redux/Cart/action";
import { Link, useNavigate } from "react-router-dom"
import { Spinner } from "@chakra-ui/react";

const CartPage = () => {
  const [allCart, setAllCart] = React.useState([]);
  const [total,setTotal] = React.useState(0)
  const [isButLoading, setIsButLoading] = useState(false);
  const store = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleCheckout = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      navigate("/ship");
    }, 2000);


  };

  // "https://buy.stripe.com/test_28o6qF8JD0lp4XS9AA"

  const getAllCartItem = async () => {
    dispatch(getAllCart())
    if (store) {
      setAllCart(store)
      let total = 0

      for (let i = 0; i < store.length; i++) {
        total += +store[i].price

      }
      setTotal(total)
      
    }
   

  };
  useEffect(() => {
    getAllCartItem();
   
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
                {allCart &&
                  allCart.map((item) => {
                    return <PaymentCard {...item} />;
                  })}
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
                    <span>$ {total}</span>
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
                    <span>$ {total} </span>
                  </div>
                </div>
                <div>
                  <div>Or 4 interest-free installments of $55.00 with </div>
                  <div>Klarna or afterpay</div>
                </div>

                <span>
                  <button onClick={handleCheckout} className="proced-btn">
                    {!isButLoading && ` PROCEED TO CHECKOUT `}
                    {isButLoading && (
                      <Spinner
                        thickness="4px"
                        speed="0.55s"
                        emptyColor="gray.200"
                        color="#17274a"
                        size="md"
                      />
                    )}
                  </button>
                </span>
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
