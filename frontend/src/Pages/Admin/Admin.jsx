import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Input, Stack, Box, Heading } from "@chakra-ui/react";
import Swal from "sweetalert2";

import AdminCard from "./AdminCard";
import { getProduct, postRequest } from "../../Redux/Admin/action";
import Skell from "./Skell";

const initialState = {
    image: "",
    title: "",
    price: "",
    rating: "",
};
const Admin = () => {
    const [data, setdata] = useState(initialState);
    const empty = [1, 2, 3, 4];
    const { product, isLoading } = useSelector((store) => store.adminReducer);

    const x = product.length;

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prev) => {
            return { ...prev, [name]: name === "price" ? +value : value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postRequest(data));
        setdata(initialState);

        Swal.fire("", "Product added!", "success");
        dispatch(getProduct());
    };

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
                    <h6 style={{ fontWeight: "bold" }}>
                        Total product is: {x}
                    </h6>
                    <div className="cartpage-left-cont">
                        <div className="cartpage-left-heading"></div>
                        <hr style={{ border: "1px doted #5c5c5f" }} />
                        <div className="cartpage-left-title">
                            <div
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}>
                                Item
                            </div>
                            <div
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}>
                                Item Price
                            </div>
                            <div
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}>
                                Rating
                            </div>
                            <div
                                style={{
                                    border: "0px solid green",
                                    backgroundColor: "rgb(23,39,74)",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}>
                                Action
                            </div>
                        </div>
                        <hr style={{ border: "1px doted #5c5c5f" }} />
                    </div>
                    {isLoading
                        ? empty.map((e) => <Skell key={e} />)
                        : product.map((ele) => {
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
                        <Stack spacing={6}>
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

                            <button
                                onClick={handleSubmit}
                                id={styles.add_product}>
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
