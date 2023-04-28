import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Divider,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
} from '@chakra-ui/react'
import Prop from './Onhover';
import OnhoverProp from './Onhover';
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Toprated = ["Shop All Top-Rated", "Top-Rated Dresses", "Top-Rated Clothing", "Top-Rated Shoes", "Top-Rated Accessories", "Top-Rated Wedding", "Top-Rated Home & Furniture", "Top-Rated Beauty", "Mini & Tunic Dresses", "Cocktail & Party Dresses", "Petite Dresses", "Plus Dresses", "Wedding Dresses", "Wedding Guest Dresses", "Bold & Bright Dresses", "Shirt Dresses", "Trending: Tulle & Sheer", "Little Black Dresses", "Little White Dresses"];
const Dresses = ["Shop All Dresses", "New!", "Top-Rated Dresses", "Bridesmaid Dresses", "Formal Dresses", "Jumpsuits", "Lounge & Casual Dresses", "Maxi Dresses", "Midi Dresses", "Mini & Tunic Dresses", "Cocktail & Party Dresses", "Petite Dresses", "Plus Dresses", "Wedding Dresses", "Wedding Guest Dresses", "Bold & Bright Dresses", "Shirt Dresses", "Trending: Tulle & Sheer", "Little Black Dresses", "Little White Dresses"];
const Shoes = ["Shop All Shoes", "New!", "Top-Rated", "Boots & Booties", "Cold Weather Boots", "Flats", "Heels & Wedges", "Mules & Clogs", "Sandals", "Slippers", "Sneakers", "Socks & Tights", "It's Here! The Reformation Shop", "Rainbow Brights : Shoes &", "Accessories", "Thong Sandals", "Embellished Shoes", "Party Shoes", "Platform Shoes", ""];
const Accessories = ["Shop All Accessories", "New!", "Top-Rated", "Bags & Small Accessories", "Belts", "Fashion Gloves", "Hair Accessories", "Hats", "Jewelry", "Scarves", "Socks & Tights", "Sunglasses & Reading Glasses", "Travel & Tech", "Necklaces", "Earrings", "Bracelets", "Rings", "Hoop Shop", "Fine & Demi-Fine Jewelry", "Shop All Jewelry"];


export default function BelowNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={6}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={10}>
            <Link href="">
              <OnhoverProp NewArray={Toprated} title={"New!"} />
            </Link>

            <OnhoverProp NewArray={Toprated} title={"Top-Rated"} />
            <Link href="/dress">
              <OnhoverProp NewArray={Dresses} title={"Dresses"} />
            </Link>
            <Link href="/cloths">
              <OnhoverProp NewArray={Toprated} title={"Clothing"} />
            </Link>
            <Link href="/shoes">
              <OnhoverProp NewArray={Shoes} title={"Shoes"} />{" "}
            </Link>
            <OnhoverProp NewArray={Accessories} title={"Accessories"} />
            <OnhoverProp NewArray={Dresses} title={"Weddings"} />
            <OnhoverProp NewArray={Toprated} title={"Home and Furniture"} />
            <OnhoverProp NewArray={Shoes} title={"Beauty Wellness"} />
            <OnhoverProp NewArray={Accessories} title={"Gifts & Candles"} />
            <OnhoverProp NewArray={Dresses} title={"Sale"} />
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  {/* <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  /> */}
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}