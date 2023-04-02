import styles from "./Admin.module.css";
import React from "react";

const AllProductCard = ({ _id, image, title, price, rating }) => {
  return (
    <div id={styles.Admincart_component}>
      <div className="paymentCard-cont">
        <div className="paymentCard-info">
          <div className="paymentCard-info-img-div">
            <img src={image} alt="" />
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
