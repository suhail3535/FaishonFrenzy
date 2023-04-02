import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

import Admin from "./Admin";

import AllProduct from "./AllProduct";

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
              border: "0px solid red",
            }}
          >
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                width: "25%",
                fontWeight: "bold",
                border: "0px solid green",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              }}
              _selected={{
                color: "white",
                bg: "#17274a",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              ALL Products Details
            </Tab>
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                //  backgroundColor: "rgb(237,242,247)",
                border: "0px solid red",
                width: "25%",
                fontWeight: "bold",
                // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
              _selected={{
                bg: "#17274a",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Manage Products
            </Tab>
            <Tab
              style={{
                margin: "30px auto",
                padding: "10px",
                width: "25%",
                fontWeight: "bold",
                border: "0px solid blue",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                // backgroundColor: "rgb(237,242,247)",
              }}
              _selected={{
                color: "white",

                borderRadius: "5px",
                fontWeight: "bold",
                bg: "#17274a",
              }}
            >
              Admin Credentials
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
              <AllProduct />
            </TabPanel>
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
                margin: " 20px",
              }}
            ></TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Manage;
