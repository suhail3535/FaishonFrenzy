import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Box, Text, Flex, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box
      style={{
        backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/01/55/45/27/500_F_155452784_ZovaHKAvYMGgESybijVC5EzE45WgJdOj.jpg")`,
        width: "97%",
     
   
        objectFit: "contain",
      }}
    >
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Box mb={6}>
          <Heading as="h1" size="3xl" textAlign="center" mb={3} color={"white"}>
            Welcome to Admin Dashboard
          </Heading>
          <Text
            textAlign="center"
            fontSize="xl"
            color="white"
            fontWeight={"bold"}
          >
            Manage your FashionFrenzy store easily.
          </Text>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
        >
          <Link to="/manage">
            <Button size="lg" backgroundColor="#E91E63" color={"white"}>
              Click To Proceed
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
