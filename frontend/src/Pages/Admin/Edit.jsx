import { Box, Button, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { editProduct } from "../../Redux/Admin/action";
import styles from "./Admin.module.css";

const Edit = () => {
  const navigate = useNavigate();
    const {id } = useParams();
   
    const product = useSelector((store) => store.adminReducer.product);
  
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const newData = {
      price: price,
      title: title,
      image: image,
      rating: rating,
    };
    dispatch(editProduct(id, newData));
    setPrice("");
    setTitle("");
    setImage("");
    setRating("");
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    navigate("/manage");
  };
  useEffect(() => {
    const productData = product.find((item) => item._id === id);
   
    productData && setPrice(productData.price);
    productData && setTitle(productData.title);
    productData && setImage(productData.image);
    productData && setRating(productData.rating);
  }, []);

  return (
    <div>
      <Box id={styles.input}>
        <form>
          <Stack spacing={4}>
            <Input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="image"
              size="md"
            />
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="name"
              size="md"
            />
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
              size="md"
            />
            <Input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              size="md"
            />

            <Button onClick={handleSubmit} id={styles.editbtn}>
              Add-Product
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default Edit;

