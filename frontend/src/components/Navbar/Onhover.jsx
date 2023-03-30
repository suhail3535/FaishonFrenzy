import React from "react";
import {
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  useDisclosure,
  Link,
  Grid,
  Text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function fun(str){
    str = str.split(" ").join("").split("-").join("");
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let abc = "abcdefghijklmnopqrstuvwxyz";
  
    let lowerCase = ""
    for(let i=0; i<str.length; i++){
      for(let j=0; j<ABC.length; j++){
          if(str[i]===ABC[j]){
            lowerCase = lowerCase + abc[j];
          }else if(str[i]===abc[j]){
            lowerCase = lowerCase + abc[j];
          }
      }
    }
    
    return lowerCase;
}

export default function OnhoverProp({ NewArray, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="App">
      <Flex align="center" justifyContent="center" >
        <Menu isOpen={isOpen}>
          <MenuButton
            as={Link}
            variant="solid"
            colorScheme="teal"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
          >
            <Text fontSize={"13px"}>{title}</Text>
          </MenuButton>
          <MenuList marginTop={"-10px"} onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Grid templateColumns='repeat(3, 1fr)'>
              {NewArray?.map((el, i) => (
                <RouterLink to={`/${fun(el)}`}>
                  <MenuItem key={i}>
                    <Text>
                      {el}
                    </Text>
                  </MenuItem>
                </RouterLink>
              ))}
            </Grid>
          
          </MenuList>
        </Menu>
      </Flex>
    </div>
  );
}