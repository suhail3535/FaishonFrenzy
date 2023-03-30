import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import {Button,Flex,Heading,Input,Text,Box,Divider,Checkbox} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io"

function Collapseble({Filter,filterBy}) {
  const [height, setHeight] = useState(0);

  return (
    <div style={{width:"100%"}}>
      <Flex padding={5}  onClick={() => setHeight(height === 0 ? "auto" : 0)} justifyContent={"space-around"} alignItems={"center"} >
      <Text textAlign={"start"} marginLeft={"-25%"} fontSize={"20px"} fontWeight={"bold"} color={"#167a92"}>{filterBy}</Text>
      <Text 
        aria-expanded={height !== 0}
        aria-controls="example-panel"
        // onClick={() => setHeight(height === 0 ? "auto" : 0)}
      >
         {height === 0 ? <IoIosArrowForward/> : <IoIosArrowDown/>}
      </Text>
      </Flex>

      <AnimateHeight
        id="example-panel"
        duration={500}
        height={height}
      >
        <Flex marginLeft={"20px"} marginTop={"10px"} direction={"column"} justifyContent={"center"} alignItems={"start"} gap={5}>
            {Filter.map((el,i)=> (
            //    <Checkbox key={i} marginStart={"20%"}>{el}</Checkbox>
               <Link key={i}  marginStart={"20%"}>{el}</Link>
            ))}
        </Flex>
        
      </AnimateHeight>
      <Divider width={"100%"} borderColor={"grey"}/>
    </div>
  );
}


  export default Collapseble;