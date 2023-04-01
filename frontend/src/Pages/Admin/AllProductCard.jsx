import styles from "./Admin.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deletedata, getProduct } from "../../Redux/Admin/action";

const AllProductCard = ({ _id, img, title, price, rating }) => {
 

 

  return (
    <div id={styles.Admincart_component}>
      <div className="paymentCard-cont">
        <div className="paymentCard-info">
          <div className="paymentCard-info-img-div">
            <img src={img} alt="" />
          </div>
          <div className="paymentCard-info-cont">
            <p>{title}</p>

            <p>
              <span>Style:</span># 4130318350035
            </p>
            <p>
              <span>Color:</span>GREEN
            </p>
            <p>
              <span>Size:</span>XS
            </p>
            <p>
              {" "}
              <span>Fit</span> Standard
            </p>
          </div>
        </div>
        <div>${price}</div>
        <div>{rating} ⭐</div>

      

       
      </div>
    </div>
  );
};

export default AllProductCard;
