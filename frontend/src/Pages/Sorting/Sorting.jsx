import { Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Sorting.module.css";

const Sorting = ({ pageon, price }) => {
    const [serchParam, setSerchParams] = useSearchParams();
    const initalState = serchParam.getAll("brand");
    const initalOrder = serchParam.get("order");
    const [category, setCategory] = useState(initalState || []);
    const [order, setorder] = useState(initalOrder || "");

    const handleChange = (e) => {
        let newCat = [...category];
        let value = e.target.value;

        if (newCat.includes(value)) {
            newCat.splice(newCat.indexOf(value), 1);
        } else {
            newCat.push(value);
        }
        setCategory(newCat);
    };

    useEffect(() => {
        let params = {
            brand: category,
        };
        price !== "" && (params.price = price);
        order && (params.rating = order);
        setSerchParams(params);
    }, [category, order, price]);

    return (
        <div className={style.head}>
            <h3 className={style.browse}>Browse by: </h3>
            <hr /> 
            <h3 className={style.page}>{pageon}</h3>
            <div className={style.sortbox}>
                <h2> Rating </h2> 
                <hr />   
                <RadioGroup onChange={setorder} value={order}>
                    <Stack direction='column'>
                        <Radio value='2.9'>3 &#9733; &#9733; &#9733;</Radio>
                        <Radio value='3.9'>4 &#9733; &#9733; &#9733; &#9733; </Radio>
                        <Radio value='4.9'>5 &#9733; &#9733; &#9733; &#9733; &#9733;</Radio>
                    </Stack>
                </RadioGroup>
            </div>
            {/* <hr className={style.hr} /> */}
            <div className={style.sortbox}>
                <h2>Brand</h2>
                <hr />  
                <div className={style.sortbox}>
                    <Checkbox
                        size="13px"
                        onChange={handleChange} 
                        defaultChecked={category.includes("Pilcro")}
                        value={"Pilcro"}
                        colorScheme="messenger"
                    >
                        Pilcro
                    </Checkbox>
                    <Checkbox
                        size="13px"
                        onChange={handleChange} 
                        defaultChecked={category.includes("By Anthropologie")}
                        value={"By Anthropologie"}
                        colorScheme="messenger"
                    >
                        By Anthropologie
                    </Checkbox>
                    <Checkbox
                        size="13px"
                        onChange={handleChange} 
                        defaultChecked={category.includes("Maeve")}
                        value={"Maeve"}
                        colorScheme="messenger"
                    >
                        Maeve
                    </Checkbox>
                    <Checkbox
                        size="13px"
                        onChange={handleChange} 
                        defaultChecked={category.includes("Sloggi")}
                        value={"Sloggi"}
                        colorScheme="messenger"
                    >
                        Sloggi
                    </Checkbox>
                </div>
            </div>
            <div className={style.sortbox}>
                    <h2>Size </h2>
                    <hr />
                    <Checkbox size="13px" colorScheme="messenger">
                        Extra Small (XS)
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        Small (S)
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        medium (M)
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        Large (L)
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        Extra Large (XL)
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        2X Large (2XL)
                    </Checkbox>
                </div>
                <div className={style.sortbox}>
                    <h2>Discount </h2>
                    <hr />
                    <Checkbox size="13px" colorScheme="messenger">
                        10% Off or more
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        15% Off or more
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        20% Off or more
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        25% Off or more
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        30% Off or more
                    </Checkbox>
                    <Checkbox size="13px" colorScheme="messenger">
                        35% Off or more
                    </Checkbox>
                </div>
        </div>
    );
};

export default Sorting;
