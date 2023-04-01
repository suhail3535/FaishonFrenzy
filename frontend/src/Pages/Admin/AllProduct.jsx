import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminCard from './AdminCard';
import { getProduct } from '../../Redux/Admin/action';
import AllProductCard from './AllProductCard';

const AllProduct = () => {
  const product = useSelector((store) => store.adminReducer.product);
  const dispatch=useDispatch()
      const x = product.length;

   useEffect(() => {
     dispatch(getProduct());
   }, []);
 
  return (
    <div>
      <h1 style={{fontWeight:"bold"}}>Total product:{x}</h1>
      <hr style={{ border: "1px doted #5c5c5f" }} />

      <div className="cartpage-left-title">
        <div style={{ fontWeight: "bold" }}>Item</div>
        <div style={{ fontWeight: "bold" }}>Item Price</div>
        <div style={{ fontWeight: "bold" }}>Rating</div>
      </div>
      <hr style={{ border: "1px doted #5c5c5f" }} />
      {product.reverse().map((ele) => {
        return (
          <div>
            <AllProductCard key={ele._id} {...ele} />
          </div>
        );
      })}
    </div>
  );
}

export default AllProduct