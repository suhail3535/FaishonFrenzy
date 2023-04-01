

import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Stack, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";

import AdminCard from "./AdminCard";
import { getProduct, postRequest } from "../../Redux/Admin/action";
import { store } from "../../Redux/Store";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
const initialState = {
  image: "",
  title: "",
  price: "",
  rating: "",
};
const Admin = () => {
  const [data, setdata] = useState(initialState);
  console.log(store);
  const product = useSelector((store) => store.adminReducer.product);
  // const user = useSelector((store) => store.adminReducer.user);
  // // console.log(user)
  // console.log(product)
      const x = product.length;
      console.log("line27", x);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRequest(data));
    setdata(initialState);
     
    Swal.fire("", "Product added!", "success");
 
  };
  // console.log(data)
  dispatch(getProduct());

  useEffect(() => {
    dispatch(getProduct());
  }, []);
 
  return (
    <div>
      <div id={styles.main_container}>
        <Box id={styles.product_list_div}>
          <Heading id={styles.heading} as={"h4"} size="md">
            Product List
          </Heading>
          <h6 style={{fontWeight:"bold"}}>Total product is: {x}</h6>
          <div className="cartpage-left-cont">
            <div className="cartpage-left-heading"></div>
            <hr style={{ border: "1px doted #5c5c5f" }} />
            <div className="cartpage-left-title">
              <div style={{ fontWeight: "bold" }}>Item</div>
              <div style={{ fontWeight: "bold" }}>Item Price</div>
              <div style={{ fontWeight: "bold" }}>Rating</div>
              <div
                style={{
                  border: "0px solid green",
                  backgroundColor: "rgb(23,39,74)",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Action
              </div>
            </div>
            <hr style={{ border: "1px doted #5c5c5f" }} />
          </div>
          {product.reverse().map((ele) => {
            return (
              <div>
                <AdminCard key={ele._id} {...ele} />
              </div>
            );
          })}
        </Box>
    
        <Box id={styles.add_new_product_div}>
          <Heading id={styles.heading} as={"h4"} size="md">
            Add New Product
          </Heading>
          <form>
            <Stack spacing={4}>
              <Input
                type="url"
                name="image"
                value={data.image}
                onChange={handleChange}
                placeholder="image"
                size="md"
              />
              <Input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="title"
                size="md"
              />
              <Input
                type="number"
                name="price"
                value={data.price}
                onChange={handleChange}
                placeholder="price"
                size="md"
              />
              <Input
                type="number"
                name="rating"
                value={data.rating}
                onChange={handleChange}
                placeholder="rating"
                size="md"
              />

              <button onClick={handleSubmit} id={styles.add_product}>
                Add-Product
              </button>
            </Stack>
          </form>
        </Box>
      </div>
    </div>
  );
};
export default Admin;
