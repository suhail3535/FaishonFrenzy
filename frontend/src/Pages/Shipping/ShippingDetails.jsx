
import React, { useEffect, useState } from "react";
import styles from "./Shipping.module.css";

import { useDispatch, useSelector } from "react-redux";

import { getRequestAddress } from "../../Redux/ShippingReducer/action";



import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { Divider, Spinner } from "@chakra-ui/react";
import ShippingDetailsCard from "./ShippingDetailsCard";
import CartPage from "../CartPage/CartPage";
import ShippingFooter from "./ShippingFooter";

const ShippingDetails = () => {
  const [isButLoading, setIsButLoading] = useState(false);

  const navigate = useNavigate();

  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      Swal.fire("Congratulations!", "Payment successfull!", "success");
      navigate("/ordersuccessfull");
    }, 2000);
  };

  const dispatch = useDispatch();
  const address = useSelector((store) => store.shippingReducer.address);

 
  

  useEffect(() => {
    dispatch(getRequestAddress());
  }, []);
  // console.log(newData)
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
              <div className={styles.Order_summmary_div}>
                <p>ORDER SUMMARY</p>
                <p>Subtotal :100</p>
                <p>Shipping Economy Ground : $ 5.00</p>
                <p>Sales Tax : $ 0.65</p>
                <p>Estimated Total:$ 120</p>
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
