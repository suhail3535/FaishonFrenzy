import { Checkbox, FormControl, FormLabel, HStack, Input, PinInput, PinInputField, Select, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import React from 'react'
import Admin from './Admin';

const Manage = () => {
  return (
    <div>
      <div>
        <Tabs
          style={{
            paddingRight: "10px",
          }}
          variant="unstyled"
        >
          <TabList
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: "1px solid red",
            }}
          >
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                backgroundColor: "rgb(237,242,247)",
                border: "2px solid red",
                width: "25%",
                fontWeight: "bold",
                color: "black",
              }}
              _selected={{
              backgroundColor:"green",
                borderRadius: "5px",
                color: "white",
              }}
            >
              Manage Products
            </Tab>
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                width: "25%",
                backgroundColor: "rgb(237,242,247)",
                border: "0px solid green",
              }}
              _selected={{
                color: "white",
                bg: "blue",
                borderRadius: "5px",
              }}
            >
             Manage costumers
            </Tab>
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                width: "25%",
                border: "0px solid blue",
                backgroundColor: "rgb(237,242,247)",
              }}
              _selected={{
                color: "white",
                bg: "#E8EAF6",
                borderRadius: "5px",
              }}
            >
             
              users
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel
              style={{
                // boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                borderRadius: "15px",
                // backgroundColor: "rgb(237,242,247)",
                margin: "20px",
                border: "0px solid green",
              }}
            >
              <Admin />
            </TabPanel>

            <TabPanel
              style={{
                boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                borderRadius: "15px",
                margin: "20px",
              }}
            >
              <div>
                <div>
                  welcome
                </div>
                <div>
                  <span>checkout</span>
                </div>
              </div>
              <span>The safer, easier way to pay </span>
            </TabPanel>

            <TabPanel
              style={{
                boxShadow: "inset 10px 10px 13px 0px rgba(0,0,0,0.1)",
                borderRadius: "15px",
                margin: " 20px",
              }}
            >
              <div>
                <img src="./payment.png" alt="" />
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Manage