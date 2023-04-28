import {
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Radio,
    RadioGroup,
    Select,
    Spinner,
    Stack,
    useToast,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postRequestAddress } from "../../Redux/ShippingReducer/action";

import styles from "./Shipping.module.css";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../../Redux/Store";
import ShippingFooter from "./ShippingFooter";
import { getAllCart } from "../../Redux/Cart/action";
import PaymentCard from "../../components/PaymentCard/PaymentCard";

const initialState = {
    firstname: "",
    lastname: "",
    address1: "",
    zipcode: "",
    city: "",
    phone: "",
};

const ShippingAdresss = () => {
    const [isButLoading, setIsButLoading] = useState(false);
    const [data, setdata] = useState(initialState);
    const [allCart, setAllCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    let dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    const address = useSelector((store) => store.shippingReducer.address);
    const store = useSelector((store) => store.cartReducer.cart);

    console.log(address);
    console.log(store);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prev) => {
            return { ...prev, [name]: name === "phone" ? +value : value };
        });
    };

    const handleSubmit = (e) => {
        setIsButLoading(true);
        e.preventDefault();
        if (
            data.firstname === "" ||
            data.lastname === "" ||
            data.address1 === "" ||
            data.zipcode === "" ||
            data.phone === "" ||
            data.city === ""
        ) {
            // setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Shipping Details Missing",
                description: "Please fill all the details",
                status: "warning",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
            // }, 2000);
        } else if (
            data.firstname !== "" &&
            data.lastname !== "" &&
            data.address1 !== "" &&
            data.zipcode !== "" &&
            data.phone !== "" &&
            data.city !== ""
        ) {
            setTimeout(() => {
                setIsButLoading(false);
                dispatch(postRequestAddress(data));
                toast({
                    title: "Please Choose a Shipping Address",
                    description: "",
                    status: "warning",
                    variant: "left-accent",
                    duration: 2500,
                    isClosable: true,
                    position: "top",
                });
                setdata(initialState);
                navigate("/shipping_address");
            }, 2000);
        }
    };



    return (
        <div>
            <Heading
                marginTop={"20px"}
                as="h4"
                size="md"
                textAlign={"left"}
                ml={"6rem"}>
                Shipping Address
            </Heading>
            <Divider />

            <div id={styles.main_div}>
                <div id={styles.first_div}>
                    <div id={styles.main_container} align="flex-start">
                        <div id={styles.vstack}>
                            <div id={styles.firstname}>
                                <FormControl>
                                    <FormLabel>First Name*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="firstname"
                                        value={data.firstname}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Last Name*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="lastname"
                                        value={data.lastname}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </FormControl>
                            </div>
                            <div id={styles.address1}>
                                <FormControl>
                                    <FormLabel>Address 1*</FormLabel>
                                    <input
                                        id={styles.input}
                                        name="address1"
                                        value={data.address1}
                                        onChange={handleChange}
                                        size="lg"
                                        placeholder="Address 1*"
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <input
                                        id={styles.input}
                                        size="lg"
                                        placeholder="Address (Optional)*"
                                    />
                                </FormControl>
                            </div>
                            <VStack>
                                <div id={styles.country}>
                                    <FormControl>
                                        <FormLabel>Country</FormLabel>
                                        <Select
                                            id={styles.input}
                                            placeholder="India"
                                            size="lg"></Select>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel
                                            style={{ marginLeft: "22px" }}>
                                            Zip Code*
                                        </FormLabel>
                                        <input
                                            id={styles.input}
                                            name="zipcode"
                                            value={data.zipcode}
                                            onChange={handleChange}
                                            type="city"
                                            size="lg"
                                            placeholder="Zip Code"
                                        />
                                    </FormControl>
                                </div>
                                <div id={styles.city}>
                                    <FormControl>
                                        <FormLabel>City*</FormLabel>
                                        <input
                                            id={styles.input}
                                            name="city"
                                            value={data.city}
                                            onChange={handleChange}
                                            size="lg"
                                            placeholder="City"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>State</FormLabel>

                                        <Select
                                            id={styles.input}
                                            placeholder="State"
                                            size="lg">
                                            <option value="Select">
                                                Uttar Pradesh
                                            </option>
                                            <option value="Select">
                                                Delhi
                                            </option>
                                            <option value="Select">
                                                Mumbai
                                            </option>
                                            <option value="Select">
                                                Rajesthan
                                            </option>
                                            <option value="Select">
                                                Jaipur
                                            </option>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div id={styles.last_div}>
                                    <FormControl>
                                        <FormLabel>Phone*</FormLabel>
                                        <input
                                            id={styles.input}
                                            name="phone"
                                            value={data.phone}
                                            onChange={handleChange}
                                            size="lg"
                                            placeholder="Phone"
                                        />
                                    </FormControl>
                                </div>
                            </VStack>
                        </div>
                    </div>
                </div>

                <div id={styles.main_container_inside_second_div}>
                    <div id={styles.third}>

                        <div>
                            <button
                                onClick={handleSubmit}
                                className={styles.ship_to_this_add_btn}>
                                {!isButLoading && `  SHIP TO THIS ADDRESS `}
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
                            <Divider />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "10px",
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                }}>
                                <h6>Promo Code</h6>
                                <h6>+</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShippingFooter />
        </div>
    );
};

export default ShippingAdresss;
