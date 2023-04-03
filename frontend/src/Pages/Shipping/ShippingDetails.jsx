import React, { useEffect, useState } from "react";
import styles from "./Shipping.module.css";

import { useDispatch, useSelector } from "react-redux";

import { getRequestAddress } from "../../Redux/ShippingReducer/action";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { Spinner } from "@chakra-ui/react";
import ShippingDetailsCard from "./ShippingDetailsCard";

import ShippingFooter from "./ShippingFooter";
import { getAllCart } from "../../Redux/Cart/action";

const ShippingDetails = () => {
  const [isButLoading, setIsButLoading] = useState(false);
     const [total, setTotal] = React.useState(0);
    const [allCart, setAllCart] = React.useState([]);

  const navigate = useNavigate();

  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      // Swal.fire("Congratulations!", "Payment successfull!", "success");
      navigate("/paymentmethod");
    }, 2000);
  };

  const dispatch = useDispatch();
  const address = useSelector((store) => store.shippingReducer.address);
    const store = useSelector((store) => store.cartReducer.cart);

  useEffect(() => {
    dispatch(getRequestAddress());
     getAllCartItem();
  }, []);
  // console.log(newData)



      const getAllCartItem = async () => {
        dispatch(getAllCart());
        if (store) {
          setAllCart(store);
          let total = 0;

          for (let i = 0; i < store.length; i++) {
            total += +store[i].price;
          }
          setTotal(total);
        }
        console.log("AllcartItem", allCart);
      };

  return (
    <>
      <div id={styles.container}>
        <div id={styles.cardOne}>
          {address.map((ele) => {
            return (
              <div className={styles.single_card_address}>
                <ShippingDetailsCard key={ele.id} {...ele} />
              </div>
            );
          })}
        </div>
        <div id={styles.second}>
          <div id={styles.third}>
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
            </div>
          </div>
          <div>
            <button
              onClick={handlePay}
              className={styles.continue_to_payment_btn}
            >
              {!isButLoading && `CONTINUE TO PAYMENT `}
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

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <h6>Promo Code</h6>
              <h6>+</h6>
            </div>
          </div>
        </div>
      </div>
      <ShippingFooter />
    </>
  );
};

export default ShippingDetails;
