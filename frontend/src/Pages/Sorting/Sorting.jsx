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
                <RadioGroup onChange={setorder} value={order}>
                    <Stack direction='column'>
                        <Radio value='3'>3 &#9733; &#9733; &#9733;</Radio>
                        <Radio value='4'>4 &#9733; &#9733; &#9733; &#9733; </Radio>
                        <Radio value='5'>5 &#9733; &#9733; &#9733; &#9733; &#9733;</Radio>
                    </Stack>
                </RadioGroup>
            </div>
            {/* <hr className={style.hr} /> */}
            <div className={style.sortbox}>
                <h2>Brand</h2>
                <div className={style.sortbox}>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        value={"Pilcro"}
                        colorScheme="messenger"
                    >
                        Pilcro
                    </Checkbox>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        value={"By Anthropologie"}
                        colorScheme="messenger"
                    >
                        By Anthropologie
                    </Checkbox>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        value={"Maeve"}
                        colorScheme="messenger"
                    >
                        Maeve
                    </Checkbox>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        value={"Sloggi"}
                        colorScheme="messenger"
                    >
                        Sloggi
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default Sorting;
