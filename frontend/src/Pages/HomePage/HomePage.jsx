import {
    Grid,
    Box,
    Image,
    Flex,
    Divider,
    GridItem,
    SimpleGrid,
    Text,
    Heading,
    Link,
} from "@chakra-ui/react";
import { useContext } from "react";

import styles from "./HomePage.module.css";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Swiper } from "./Swiper";
import { SwiperTwo } from "./SwiperTwo";

const SliderData1 = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4130578570023_041_b2?$an-category$&qlt=80&fit=constrain",
        title: "Arctic Monogram Ornament",
        id: 1,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4130646420009_085_b2?$an-category$&qlt=80&fit=constrain",
        title: "Ernestine Bath Mat",
        id: 2,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590131_070_b?$an-category$&qlt=80&fit=constrain",
        title: "Wishbone Bracket",
        id: 3,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590242_010_b2?$an-category$&qlt=80&fit=constrain",
        title: "Flora Taper Candlestick",
        id: 4,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/35388685_020_b27?$an-category$&qlt=80&fit=constrain",
        title: "titled Margot Monogram Mug",
        id: 5,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4130647160161_001_b2?$an-category$&qlt=80&fit=constrain",
        title: "Endless Rose Mini Sweater Dress",
        id: 6,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4130370060123_011_b2?$an-category$&qlt=80&fit=constrain",
        title: "Wishbone Bracket",
        id: 7,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4122900970121_093_b2?$an-category$&qlt=80&fit=constrain",
        title: "Gold Oval Drop Earrings",
        id: 8,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4130916210136_015_b2?$an-category$&qlt=80&fit=constrain",
        title: "Flora Taper Candlestick",
        id: 9,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/67117135_040_b?$an-category$&qlt=80&fit=constrain",
        title: "Heart Trinket Dish",
        id: 10,
    },
];

const SliderData2 = [
    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590131_001_b?$an-category$&qlt=80&fit=constrain",
        title: "The Colette Cropped Wide-Leg Pants",
        id: 1,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/64600158_060_b2?$an-category$&qlt=80&fit=constrain",
        title: "Capri Blue x Pura HomePage Fragrance Oil Refill",
        id: 2,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4123650590249_041_b2?$an-category$&qlt=80&fit=constrain",
        title: "Jo Faulkner Colette Cropped Wide-Leg Pants",
        id: 3,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4112017560206_011_b2?$an-category$&qlt=80&fit=constrain",
        title: "Tiny Hartford Embroidered Top",
        id: 4,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/52733375_011_b?$an-category$&qlt=80&fit=constrain",
        title: "Capri Blue Capiz Jar Candle",
        id: 5,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/4114529100236_011_b2?$an-category$&qlt=80&fit=constrain",
        title: "By Anthropologie Cropped Mock-Neck Sweater",
        id: 6,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/52733466_011_b10?$an-category$&qlt=80&fit=constrain",
        title: "Capri Blue Capiz Mini Jar Candle",
        id: 7,
    },

    {
        img: "https://images.urbndata.com/is/image/Anthropologie/47859319_001_b?$an-category$&qlt=80&fit=constrain",
        title: "Birthday E-Gift Card",
        id: 8,
    },
];

function HomePage() {
    return (
      <div
        style={{ maxWidth: "95vw", margin: "auto" }}
        className="main_home_div"
      >
        <SimpleGrid
          columns={[1, 2, 2, 4]}
          spacing="3px"
          className={styles.paddinLeft}
          paddingTop={"30px"}
          paddingBottom={"30px"}
        >
          <GridItem>
            <Image
              w={"100%"}
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/gB8j1vpg2pP2rpRpa75i9/312436ccf606776719785ef409420f46/LS_M0_Banner_a.jpg?w=630&q=80&fm=webp"
              alt="Error"
            />
          </GridItem>

          <GridItem>
            <Image
              w={"100%"}
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/1NPjQQ97u8xeHrFHkXjrax/8e715eaa8cf02c6c9daba8dadd4b2d6a/LS_M0_Banner_b.jpg?w=630&q=80&fm=webp"
              alt="Error"
            />
          </GridItem>

          <GridItem>
            <Image
              w={"100%"}
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/1Lyxv82WJDkGaRWROJFSL3/d2a3f0c2dcfc706a09c4b7991b43f67d/LS_M0_Banner_f.jpg?w=630&q=80&fm=webp"
              alt="Error"
            />
          </GridItem>

          <GridItem>
            <Image
              w={"100%"}
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/5NZtjeqhlhchOW8aK8ALjQ/b50f60cb0cdcdaf3e1878c13aaea7907/LS_M0_Banner_e.jpg?w=630&q=80&fm=webp"
              alt="Error"
            />
          </GridItem>
        </SimpleGrid>

        <Flex
          flexDirection={["column", "column", "row", "row"]}
          gap={"20px"}
          className={styles.paddinLeft}
        >
          {/* <GridItem width={"160%"} > */}
          <Image
            h={"650px"}
            className={styles.imgall}
            width={["100%", "100%", "68%", "68%"]}
            src="https://images.ctfassets.net/5de70he6op10/2qNPYihpSMixD9hklRMIOH/952d55b8268d66373b3bc3333b733c0b/LS_M1a-1-2.jpg?w=1784&q=80&fm=webp"
            alt={"error"}
          />

          {/* </GridItem> */}
          {/* <GridItem > */}
          <Image
            h={"650px"}
            className={styles.imgall}
            width={["100%", "100%", "30%", "30%"]}
            src="https://images.ctfassets.net/5de70he6op10/7qi0oKfnqUGDqWtXby6cva/876293b82a386f8bdbf49e4e1aa28100/484733007-hpg_m1-b.gif?w=428&q=80&fm=webp"
            alt={"error"}
          />
          {/* </GridItem> */}
        </Flex>

        <SimpleGrid
          columns={[1, 2, 4]}
          spacing="40px"
          marginTop={"30px"}
          className={styles.paddinLeft}
        >
          <Box>
            <Image
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/3oxEDi87p07u8PDBRUWZQT/799ee882cf52081f2d78dd8d9f4dcc62/484733075-ls_m2a.jpg?w=660&q=80&fm=webp"
              alt="Error"
            />
          </Box>

          <Box>
            <Image
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/7FFfT0oq4tbFutP6p7u4YZ/71fb0faac0ef301451d157e0b035f8a0/484733081-ls_m2b.jpg?w=660&q=80&fm=webp"
              alt="Error"
            />
          </Box>

          <Box>
            <Image
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/55I6Ziwm1BLgmFHzuRJi9U/d5afd53ea4e04c32444f7e6994de3a26/484733090-ls_m2c.jpg?w=660&q=80&fm=webp"
              alt="Error"
            />
          </Box>

          <Box>
            <Image
              className={styles.imgall}
              src="https://images.ctfassets.net/5de70he6op10/6m0is55tRAh4uMrxrsZwyb/5d42159121116c07584fca7d41dc5ac2/484733095-ls_m2d.jpg?w=660&q=80&fm=webp"
              alt="Error"
            />
          </Box>
        </SimpleGrid>
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          gap={"25px"}
          marginTop={"35px"}
          className={styles.paddinLeft}
        >
          {/* <GridItem width={"160%"} > */}
          <Image
            className={styles.imgall}
            h={"620px"}
            width={["100%", "100%", "68%", "68%"]}
            src="https://images.ctfassets.net/5de70he6op10/1V3Atq484hyeMWCw1MVXas/12f900820a162ba443ed50c4fdfd42d3/484733140-ls_m3a.jpg?w=1756&q=80&fm=webp"
            alt={"error"}
          />

          {/* </GridItem> */}
          {/* <GridItem > */}
          <Image
            h={"620px"}
            className={styles.imgall}
            width={["100%", "100%", "30%", "30%"]}
            src="https://images.ctfassets.net/5de70he6op10/3rKgQlzbypafdDTvNckO2q/193350ddf772ecfdc9c89ee5879ff993/484733144-ls_m3b.jpg?w=856&q=80&fm=webp"
            alt={"error"}
          />
          {/* </GridItem> */}
        </Flex>

        <Flex
          columns={[1, 1, 2]}
          gap={"25px"}
          marginTop={"35px"}
          className={styles.paddinLeft}
        >
          {/* <GridItem width={"160%"} > */}
          <Image
            h={"620px"}
            width={"50%"}
            src="https://images.ctfassets.net/5de70he6op10/7cxMotLF5i9rrL92ndmypR/88e8ae5aa03038acc259dd104a9d2963/484733176-ls_m4a.jpg?w=1302&q=80&fm=webp"
            alt={"error"}
          />

          {/* </GridItem> */}
          {/* <GridItem > */}
          <Image
            h={"620px"}
            width={"50%"}
            src="https://images.ctfassets.net/5de70he6op10/716Ut6ZHZcpObdM9yRjLX8/ceb76d3813b83c516a7773b4749d9dcd/484733181-ls_m4b.jpg?w=1302&q=80&fm=webp"
            alt={"error"}
          />
          {/* </GridItem> */}
        </Flex>

        {/* <Image width={"98.5%"} marginTop={"30px"} className={styles.paddinLeft} src="https://images.ctfassets.net/5de70he6op10/6LHRhljgKFw6YzWmOceaQS/26f6e98eb8b93b759a92cb8e6551b457/463447570-ls_m3.jpg?w=2694&q=80&fm=webp" alt="error"/> */}

        <Image
          width={"98.5%"}
          marginTop={"30px"}
          className={styles.paddinLeft}
          src={
            "https://images.ctfassets.net/5de70he6op10/2XUxhNlu24HaHTFRAghRS3/f30d5364574fc72b718e910f087b2685/484733194-ls_m5a.jpg?w=2640&q=80&fm=webp"
          }
          alt="error"
        />

        {/* <Image width={"98.5%"} marginTop={"30px"} className={styles.paddinLeft} src={"https://images.ctfassets.net/5de70he6op10/6nUYEvFH2JxdQK4FTbbSp5/f94f031742f4ee7d5eaa6c619bff9e77/463447574-ls_m5.jpg?w=2190&q=80&fm=webp"} alt="error"/> */}

        {/* <SwiperImage className={styles.paddinLeft} SliderData1={SliderData1} heading={"You May Also Like"}/> */}
        <Box className={styles.paddinLeft} marginTop={10}>
          <Text
            fontFamily={"Spectral Extra Light serif"}
            fontSize={22}
            textAlign={"start"}
          >
            You May Also Like{" "}
          </Text>
          <Divider borderColor="grey" />
          <br />
        </Box>
        {/* <SwiperImage className={styles.paddinLeft} SliderData1={SliderData2} heading={"Recently Viewed"}/> */}
        <Swiper />

        <Box className={styles.paddinLeft} marginTop={10}>
          <Text
            fontFamily={"Spectral Extra Light serif"}
            fontSize={22}
            textAlign={"start"}
          >
            Trending Now{" "}
          </Text>
          <Divider borderColor="grey" />
          <br />
        </Box>
        <SwiperTwo />

        <Box className={styles.paddinLeft} marginTop={10}>
          <Text
            fontFamily={"Spectral Extra Light serif"}
            fontSize={22}
            textAlign={"center"}
          >
            More to Explore{" "}
          </Text>
          <Divider borderColor="grey" />
          <br />
        </Box>

        <SimpleGrid
          columns={[1, null, 3]}
          gap={5}
          className={styles.paddinLeft}
        >
          <Flex direction={"column"} gap={5}>
            <Image
              src="https://images.ctfassets.net/5de70he6op10/U2fCd9Ep6otJYrxWA6a0t/2a236b9ea21b5785d7e98cee0f11871e/MTE_1.jpg?w=856&q=80&fm=webp"
              alt="Error"
            />
            <Text
              fontSize={22}
              fontFamily={"Times"}
              textAlign={"start"}
              color={"#696969"}
            >
              New Chapter, Fresh Paige
            </Text>
            <Text textAlign={"start"}>
              Turn to the experts in flattering fits and flawlessly tailored
              pairs to start spring on the right note.
            </Text>
            <Link textAlign={"start"} color={"#167a92"}>
              shop Paige jeans
            </Link>
          </Flex>

          <Flex direction={"column"} gap={5}>
            <Image
              src="https://images.ctfassets.net/5de70he6op10/25UKbR1vHJpq6yriubNoSD/c1e9f1ba93a96c9b3d7ac869951de29c/MTE_2.jpg?w=856&q=80&fm=webp"
              alt="Error"
            />
            <Text
              fontSize={22}
              fontFamily={"Times"}
              textAlign={"start"}
              color={"#696969"}
            >
              The Beauty Edit: TikTok-Famous!
            </Text>
            <Text textAlign={"start"}>
              Make Beauty is just one of the brands you'll find in our curated
              collection of gone-viral TikTok faves.
            </Text>
            <Link textAlign={"start"} color={"#167a92"}>
              don't miss these must-haves
            </Link>
          </Flex>

          <Flex direction={"column"} gap={5}>
            <Image
              src="https://images.ctfassets.net/5de70he6op10/4oNoIgRJVULLXu6o02FnFA/79760e323b6140b7fc68bb50638c8079/032023_HPG_MTE_3.jpg?w=856&q=80&fm=webp"
              alt="Error"
            />
            <Text
              fontSize={22}
              fontFamily={"Times"}
              textAlign={"start"}
              color={"#696969"}
            >
              celebrating International Women's Day
            </Text>
            <Text textAlign={"start"}>
              We're proud to support women-owned brands each and every day.
            </Text>
            <Link textAlign={"start"} color={"#167a92"}>
              discover new favorites
            </Link>
          </Flex>
        </SimpleGrid>
        {/* <br /> */}
        <Divider
          width={"98.5%"}
          borderColor="grey"
          className={styles.paddinLeft}
        />
        <br />
      </div>
    );
}

export default HomePage;
