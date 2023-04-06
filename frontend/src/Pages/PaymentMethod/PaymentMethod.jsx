import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Select,
  Spinner,
  StylesProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Payment.module.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useDispatch, useSelector } from "react-redux";
// import { getRequestAddress } from "../../Redux/UserReducer/action";

// import PaymentCard from "./PaymentCard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";
import Swal from "sweetalert2";

const PaymentMethod = () => {
  const [isButLoading, setIsButLoading] = useState(false);

  const navigate = useNavigate();

  const handlePay = () => {
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      Swal.fire("Congratulations!", "Payment successfull!", "success");
      navigate("/");
    }, 2000);
  };

  const dispatch = useDispatch();



  useEffect(() => {
    // dispatch(getRequestAddress());
  }, []);
  // console.log(newData)
  return (
    <div>
      <Heading
        as="h2"
        size="lg"
        style={{
          textAlign: "center",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        Payment Method
      </Heading>
      <div id={styles.container}>
      

        <div id={styles.method}> 
          <Tabs
            style={{
              paddingRight: "10px",
              border: "0px solid red", 
              width:"100%" 
            }}  
            variant="unstyled"
          >
            <TabList
              style={{
                display: "flex",
                justifyContent: "space-around",
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
                  bg: "#E8EAF6",
                  borderRadius: "5px",
                }}
              >
                <CreditCardIcon />
                Credit/Debit Card
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
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg"
                  alt=""
                />
              </Tab>
              <Tab
                style={{
                  margin: "30px auto",
                  padding: "10px",
                  width: "25%",
                  border: "0px solid blue",
                }}
                _selected={{
                  color: "white",
                  bg: "#E8EAF6",
                  borderRadius: "5px",
                }}
              >
                <img
                  width={"70%"}
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel
                style={{
                  boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                  borderRadius: "15px",
                  margin: "20px",
                }}
              >
                <VStack>
                  <HStack id={styles.name}>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Name on Card*
                      </FormLabel>
                      <Input
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "100%",
                          marginRight: "20px",
                        }}
                        type="city"
                        size="lg"
                        placeholder=" Name on Card"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel style={{ marginLeft: "0px" }}>
                        Card Type
                      </FormLabel>

                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "100%",
                          marginLeft: "0px",
                        }}
                        placeholder="Select"
                        size="lg"
                      >
                        <option value="Select">American Express</option>
                        <option value="Select">Master Card</option>
                        <option value="Select">Discover</option>
                        <option value="Select">JCB</option>
                      </Select>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.otp}>
                    <FormControl>
                      <FormLabel>Card Number*</FormLabel>
                      <Input
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "100%",

                          marginRight: "20px",
                        }}
                        size="lg"
                        placeholder="Card Number"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel marginLeft={0}>Security Code</FormLabel>
                      <HStack width="full">
                        <PinInput size="lg" type="alphanumeric" mask>
                          <PinInputField
                            style={{
                              border: "1px solid gray",
                            }}
                          />
                          <PinInputField
                            style={{
                              border: "1px solid gray",
                            }}
                          />
                          <PinInputField
                            style={{
                              border: "1px solid gray",
                            }}
                          />
                        </PinInput>
                      </HStack>
                    </FormControl>
                  </HStack>
                  <HStack id={styles.date}>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "100%",

                          marginLeft: "0px",
                        }}
                        placeholder="Month"
                        size="lg"
                      >
                        <option value="Select"> January</option>
                        <option value="Select">February</option>
                        <option value="Select">March</option>
                        <option value="Select">April</option>
                        <option value="Select">May</option>
                        <option value="Select">June</option>
                        <option value="Select">July</option>
                        <option value="Select">August</option>
                        <option value="Select">September</option>
                        <option value="Select">October</option>
                        <option value="Select">November</option>
                        <option value="Select">December</option>
                      </Select>
                    </FormControl>
                    <FormControl>
                      <Select
                        style={{
                          border: "1px solid black",
                          height: "50px",
                          width: "100%",

                          margineft: "10px",
                        }}
                        placeholder="Year"
                        size="lg"
                      >
                        <option value="Select">2024</option>
                        <option value="Select">2025</option>
                        <option value="Select">2026</option>
                        <option value="Select">2027</option>
                        <option value="Select">2028</option>
                        <option value="Select">2029</option>
                        <option value="Select">2030</option>
                        <option value="Select">2031</option>
                        <option value="Select">2032</option>
                        <option value="Select">2033</option>
                        <option value="Select">2034</option>
                      </Select>
                    </FormControl>
                  </HStack>
                </VStack>
                <div id={styles.check}>
                  <Checkbox defaultChecked>Save thid card</Checkbox>
                </div>
              </TabPanel>

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
                  <img src="./phonepay.jpg" alt="" />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <button onClick={handlePay} className={styles.bookbtn2}>
        {!isButLoading && ` Pay Now `}

        {isButLoading && (
          <Spinner
            thickness="4px"
            speed="0.55s"
            emptyColor="gray.200"
            color="#17274a"
            size="lg"
          />
        )}
      </button>
    </div>
  );
};

export default PaymentMethod;
