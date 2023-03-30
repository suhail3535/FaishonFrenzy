

import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Stack, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";

import AdminCard from "./AdminCard";
import { getProduct, postRequest } from "../../Redux/Admin/action";
import { store } from "../../Redux/Store";
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

  useEffect(() => {
    dispatch(getProduct());
  }, []);
 
  return (
    <div>
      <Heading size="lg" style={{ textAlign: "center", margin: "20px" }}>
        Welcome Admin
      </Heading>
      <div id={styles.container}>
        <Box id={styles.first}>
          {product.reverse().map((ele) => {
            return (
              <div>
                <AdminCard key={ele.id} {...ele} />
              </div>
            );
          })}
        </Box>
        <Box id={styles.second}>
          <Heading id={styles.heading} as={"h4"} size="md">
            Add Product
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

              <button onClick={handleSubmit} id={styles.btn}>
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
