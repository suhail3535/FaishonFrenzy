import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { postRequestAddress } from "../../Redux/ShippingReducer/action";

import styles from "./Shipping.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { useEffect } from "react";
import { store } from "../../Redux/Store";
import ShippingFooter from "./ShippingFooter";

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
  let dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const address = useSelector((store) => store.shippingReducer.address);
  console.log(address)
  console.log(store)
  

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

    //  Swal.fire("", "Product added!", "success");
  };

  return (
    <div>
      <Heading
        marginTop={"20px"}
        as="h4"
        size="md"
        textAlign={"left"}
        ml={"6rem"}
      >
        Shipping Address
      </Heading>
      <Divider />

      <div id={styles.main_container}>
        <div id={styles.main_container_inside_first_div}>
          <VStack
            align="flex-start"
            border={"0px solid orange"}
            boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            marginBottom={"40px"}
            spacing={10}
            padding={10}
          >
            <VStack>
              <HStack>
                <FormControl>
                  <FormLabel>First Name*</FormLabel>
                  <Input
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #B0BEC5",
                      height: "45px",
                      borderRadius: "0px",
                      width: "380px",
                    }}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel style={{ marginLeft: "22px" }}>
                    Last Name*
                  </FormLabel>
                  <Input
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #B0BEC5",
                      borderRadius: "0px",
                      height: "45px",
                      width: "380px",
                      marginLeft: "20px",
                    }}
                    placeholder="Last Name"
                  />
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel>Address 1*</FormLabel>
                <Input
                  name="address1"
                  value={data.address1}
                  onChange={handleChange}
                  style={{
                    border: "1px solid #B0BEC5",
                    height: "45px",
                    borderRadius: "0px",
                  }}
                  size="lg"
                  placeholder="Address 1*"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  style={{
                    border: "1px solid #B0BEC5",
                    height: "45px",
                    borderRadius: "0px",
                  }}
                  size="lg"
                  placeholder="Address (Optional)*"
                />
              </FormControl>
              <VStack>
                <HStack>
                  <FormControl>
                    <FormLabel>Country</FormLabel>
                    <Select
                      style={{
                        border: "1px solid #B0BEC5",
                        height: "45px",
                        width: "380px",
                        borderRadius: "0px",
                      }}
                      placeholder="India"
                      size="lg"
                    ></Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ marginLeft: "22px" }}>
                      Zip Code*
                    </FormLabel>
                    <Input
                      name="zipcode"
                      value={data.zipcode}
                      onChange={handleChange}
                      style={{
                        border: "1px solid #B0BEC5",
                        height: "45px",
                        width: "380px",
                        marginLeft: "20px",
                        borderRadius: "0px",
                      }}
                      type="city"
                      size="lg"
                      placeholder="Zip Code"
                    />
                  </FormControl>
                </HStack>
                <HStack>
                  <FormControl>
                    <FormLabel>City*</FormLabel>
                    <Input
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                      style={{
                        border: "1px solid #B0BEC5",
                        height: "45px",
                        width: "380px",
                        borderRadius: "0px",
                      }}
                      size="lg"
                      placeholder="City"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel style={{ marginLeft: "22px" }}> State</FormLabel>

                    <Select
                      style={{
                        border: "1px solid #B0BEC5",
                        height: "45px",
                        width: "380px",
                        marginLeft: "20px",
                        borderRadius: "0px",
                      }}
                      placeholder="State"
                      size="lg"
                    >
                      <option value="Select">Uttar Pradesh</option>
                      <option value="Select">Delhi</option>
                      <option value="Select">Mumbai</option>
                      <option value="Select">Rajesthan</option>
                      <option value="Select">Jaipur</option>
                    </Select>
                  </FormControl>
                </HStack>
              </VStack>
            </VStack>

            <VStack>
              <HStack width="full">
                <FormControl>
                  <FormLabel>Mobile*</FormLabel>
                  <Input
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    style={{
                      border: "1px solid #B0BEC5",
                      height: "45px",
                      width: "380px",
                      borderRadius: "0px",
                    }}
                    size="lg"
                    placeholder="+91"
                  />
                </FormControl>
              </HStack>

              <HStack></HStack>
            </VStack>
          </VStack>
        </div>
        <div id={styles.main_container_inside_second_div}>
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
              onClick={handleSubmit}
              className={styles.ship_to_this_add_btn}
            >
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
              }}
            >
              <h6>Promo Code</h6>
              <h6>+</h6>
            </div>
          </div>
        </div>
      </div>
      <ShippingFooter />
    </div>
  );
};

export default ShippingAdresss;
