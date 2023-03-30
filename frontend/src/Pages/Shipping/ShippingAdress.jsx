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
          title: "Please Choose a Payment Method",
          description: "",
          status: "warning",
          variant: "left-accent",
          duration: 2500,
          isClosable: true,
          position: "top",
        });
        setdata(initialState);
        navigate("/paymentmethod");
      }, 2000);
    }

    //  Swal.fire("", "Product added!", "success");
  };

  return (
    <div>
      <Tabs
        style={{
          paddingRight: "10px",
          border: "0px solid red",
        }}
        variant="unstyled"
      >
        <TabList
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "2px solid orange",
          }}
        >
          <Tab
            style={{
              margin: "30px auto",
              padding: "10px",
              border: "0px solid red",
              width: "25%",
            }}
            _selected={{
              color: "black",
              bg: "rgb(22,122,146)",
              borderRadius: "5px",
            }}
          >
            {/* <CreditCardIcon /> */}
            SHIP
          </Tab>
          <Tab
            style={{
              margin: "30px auto",
              padding: "10px",
              width: "25%",
              border: "0px solid green",
            }}
            _selected={{
              color: "white",
              bg: "#E8EAF6",
              borderRadius: "5px",
            }}
          >
            PICK UP
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>

          <TabPanel
            style={{
              boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
              borderRadius: "15px",
              margin: "20px",
            }}
          >
            <div className={styles.buttonpay}>
              <div>
                <img
                  width={"90%"}
                  padding={"20px"}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                  alt=""
                />
              </div>
              <div>
                <span>checkout</span>
              </div>
            </div>
            <span id={styles.span}>The safer, easier way to pay </span>
          </TabPanel>

          <TabPanel
            style={{
              boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
              borderRadius: "15px",
              margin: " 20px",
            }}
          >
            <div id={styles.phone}>
              <img src="./payment.png" alt="" />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>

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

      <div id={styles.main}>
        <div id={styles.one}>
          <VStack
            align="flex-start"
            border={"2px solid orange"}
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
                      border: "1px solid gray",
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
                      border: "1px solid gray",
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
                    border: "1px solid gray",
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
                    border: "1px solid gray",
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
                        border: "1px solid gray",
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
                        border: "1px solid gray",
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
                        border: "1px solid gray",
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
                        border: "1px solid gray",
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
                      border: "1px solid gray",
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
        <div id={styles.two}>
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
            <button onClick={handleSubmit} className={styles.bookbtn}>
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
    </div>
  );
};

export default ShippingAdresss;
