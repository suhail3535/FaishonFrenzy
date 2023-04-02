import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Box, Text, Flex, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box
      style={{
        backgroundImage: `url("https://vilmanunez.com/wp-content/uploads/2014/02/content.png")`,
        width: "97%",
        margin: "auto",
      }}
    >
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Box mb={6}>
          <Heading as="h1" size="3xl" textAlign="center" mb={3} color={"black"}>
            Welcome to Admin Dashboard
          </Heading>
          <Text
            textAlign="center"
            fontSize="xl"
            color="#607D8B"
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
