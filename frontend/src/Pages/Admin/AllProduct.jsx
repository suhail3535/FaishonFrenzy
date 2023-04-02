import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../Redux/Admin/action";
import AllProductCard from "./AllProductCard";
import Skell from "./Skell";

const AllProduct = () => {
  
  const {product,isLoading} = useSelector((store) => store.adminReducer);
  const dispatch = useDispatch();
  const x = product.length;
 const empty = [1, 2, 3, 4]; 
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>Total product:{x}</h1>
      <hr style={{ border: "1px doted #5c5c5f" }} />

      <div className="cartpage-left-title">
        <div style={{ fontWeight: "bold", fontSize: "15px" }}>Item</div>
        <div style={{ fontWeight: "bold", fontSize: "15px" }}>Item Price</div>
        <div style={{ fontWeight: "bold", fontSize: "15px" }}>Rating</div>
      </div>
      <hr style={{ border: "1px doted #5c5c5f" }} />
      {isLoading
        ? empty.map((e) => <Skell key={e} />)
        : product.reverse().map((ele) => {
            return (
              <div>
                <AllProductCard key={ele._id} {...ele} />
              </div>
            );
          })}
    </div>
  );
};

export default AllProduct;
