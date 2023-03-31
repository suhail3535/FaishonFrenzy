import { Checkbox, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Sorting.module.css";

const Sorting = ({ page, price }) => {
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
            page 
        };
        price !== "" && (params.price = price);
        order && (params.rating = order); 
        setSerchParams(params);
    }, [category, order, price, page]);

    return (
        <div className={style.head}> 
            <h3 className={style.page}>Browse by:</h3>
            <div className={style.sortbox}>
                <h2> Rating </h2>
                <hr />
                <RadioGroup onChange={setorder} value={order}>
                    <Stack direction='column'>
                        <Radio colorScheme='yellow' value='3'>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                        </Radio>
                        <Radio colorScheme='yellow' value='4'>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>

                        </Radio>
                        <Radio colorScheme='yellow' value='5'>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                            <span className={style.star}>
                                &#9733;
                            </span>
                        </Radio>
                    </Stack>
                </RadioGroup>
            </div>
            {/* <hr className={style.hr} /> */}
            <div className={style.sortbox}>
                <h2>Brand</h2>
                <hr />
                <div className={style.sortbox}>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        defaultChecked={category.includes("Pilcro")}
                        value={"Pilcro"}
                        colorScheme="messenger"
                    >
                        Pilcro
                    </Checkbox>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        defaultChecked={category.includes("By Anthropologie")}
                        value={"By Anthropologie"}
                        colorScheme="messenger"
                    >
                        By Anthropologie
                    </Checkbox>
                    <Checkbox
                        size="lg"
                        onChange={handleChange}
                        defaultChecked={category.includes("Maeve")}
                        value={"Maeve"}
                        colorScheme="messenger"
                    >
                        Maeve
                    </Checkbox>
                    <Checkbox
                        size="lg"
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
                <Checkbox size="lg" colorScheme="messenger">
                    Extra Small (XS)
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    Small (S)
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    medium (M)
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    Large (L)
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    Extra Large (XL)
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    2X Large (2XL)
                </Checkbox>
            </div>
            <div className={style.sortbox}>
                <h2>Discount </h2>
                <hr />
                <Checkbox size="lg" colorScheme="messenger">
                    10% Off or more
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    15% Off or more
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    20% Off or more
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    25% Off or more
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    30% Off or more
                </Checkbox>
                <Checkbox size="lg" colorScheme="messenger">
                    35% Off or more
                </Checkbox>
            </div>
        </div>
    );
};

export default Sorting;
