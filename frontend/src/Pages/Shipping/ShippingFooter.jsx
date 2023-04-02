import {
  Box,
  Container,
  Stack,
  Text,
 
  useColorModeValue,
} from "@chakra-ui/react";

const  ShippingFooter=()=> {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
       
        align={{ base: "center", md: "center" }}
      >
    
        <Text>© 2023 Faishon frenzy. All rights reserved</Text>
      </Container>
    </Box>
  );
}
export default ShippingFooter;