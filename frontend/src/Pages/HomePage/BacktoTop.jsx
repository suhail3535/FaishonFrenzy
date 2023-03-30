import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button,Text } from '@chakra-ui/react';
import styles from "./Btt.module.css";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position='fixed'
          bottom='20px'
          right={['16px', '84px']}
          zIndex={3}
          >
          <Button
            size={'sm'}
            // rightIcon={<ArrowUpIcon />}
            // colorScheme='whatsapp'
            bg={"white"}
            variant='solid'
            w={"50px"}
            h={"50px"}
            style={{borderRadius:"50%"}}
            border="1px solid #167a92"
            >
               <Text fontSize={"27px"} color={"#167a92"}>↑</Text> 
          </Button>
        </Box>
      )}
    </>
  );
}