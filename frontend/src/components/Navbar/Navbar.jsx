import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  ButtonGroup,
  Divider,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import {Link as }
import { Link as RouterLink } from "react-router-dom";
import source from "../../Images/HomePage/img1.png";
import Source2 from "../../Images/HomePage/img2.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import BelowNavbar from "./BelowNavbar";
import { useContext } from "react";

import { useEffect } from "react";
import { useState } from "react";
// import { CartContext } from '../Contexts/CartContext';
import { Navigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

import {FiSearch} from "react-icons/fi";
import {SlHandbag} from "react-icons/sl" 
import OnhoverProp from './Onhover';


const Links = ["𝐵𝑒𝒻𝒶𝓈𝒽𝒾𝑜𝓃𝒶𝒷𝓁𝑒"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    fontSize={"20"}
    href={"#"}
  >
    {children}
  </Link>
);

const getData = async (val) => {
  if (val) {
    const res = await fetch(
      `https://test-api-2.onrender.com/products?q=${val}`
    );
    const data = await res.json();
    return data;
  }
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [inputData, setInputData] = useState("");

  const fetchedData = async (inputData) => {
    const result = await getData(inputData);
  };

  return (
    <>

    <Image src={Source2} alt={"Error"} />
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        borderBottom={"0.1px solid #b1b5be"}
        borderTop={"0.1px solid #b1b5be"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box pb={4} display={["none", "none", "none", "block", "block"]}>
              <RouterLink to="/">
                <p
                  style={{
                    borderRight: "0.1px solid #b1b5be",
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "122%",
                    borderTop: "3.5px solid #167a92",
                    borderLeft: "0.1px solid #b1b5be",
                  }}
                >
                  {" "}
                  𝙵𝚊𝚒𝚜𝚑𝚘𝚗𝙵𝚛𝚎𝚗𝚣𝚢
                </p>
              </RouterLink>
            </Box>
            <HStack
              borderRight={"0.1px solid #b1b5be"}
              w={"200px"}
              height={"65px"}
              as={"nav"}
              spacing={4}
              pb={4}
              display={["none", "none", "none", "flex", "block"]}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex w={"50%"}>
            <input
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Search FaishonFrenzy"
              style={{ width: "100%", border: "1px solid grey" }}
              _focus={"none"}
              borderRadius={"none"}
            />
            <Button
              _hover={"#167a92"}
              border={"2px solid #167a92"}
              borderRadius={"none"}
              backgroundColor={"#167a92"}
              color={"white"}
            >
              <FiSearch />
            </Button>
          </Flex>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <RouterLink to={"/cart"}>
            <Box pb={4} display={["none", "none", "none", "block", "block"]}>
              <SlHandbag
                style={{ height: "350px", width: "35px", color: "#167a92" }}
              />
            </Box>
          </RouterLink>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                pb={4}
                display={["none", "none", "none", "block", "block"]}
              >
                <FaUserAlt marginLeft={"20px"} size={"25px"} />
              </MenuButton>
              <MenuList>
                {/* <MenuItem> */}
                <MenuItem>
                  <RouterLink to="/login">Login</RouterLink>
                </MenuItem>
                <MenuItem>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={["none", "none", "none", "block", "block"]}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
