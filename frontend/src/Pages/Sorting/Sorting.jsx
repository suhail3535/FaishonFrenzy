import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import React from 'react'
import style from "./Sorting.module.css";

const Sorting = ({pageon}) => {
    const [rating, setRating] = React.useState("");
    const [brand, setBrand] = React.useState("");

    return (
        <div className={style.head}> 
            <h3 className={style.browse}>Browse by: </h3>  
            <hr />  
            <h3 className={style.page}>{pageon}</h3> 
            <div className={style.sortbox}>
                <h2> Rating </h2>
                <RadioGroup onChange={setRating} value={rating}>
                    <Stack direction='column'>
                        <Radio size='sm' value={"asc"}>Low to High</Radio>
                        <Radio size='sm' value={"desc"}>High to Low</Radio>
                    </Stack>
                </RadioGroup>
            </div> 
            {/* <hr className={style.hr} /> */}
            <div className={style.sortbox}>
                <h2>Brand</h2>
                <RadioGroup onChange={setBrand} value={brand}>
                    <Stack direction='column'>
                        <Radio size='sm' value={"Pilcro"}>Pilcro</Radio>
                        <Radio size='sm' value={"By Anthropologie"}>By Anthropologie</Radio>
                        <Radio size='sm' value={"Maeve"}>Maeve</Radio>
                        <Radio size='sm' value={"Sloggi"}>Sloggi</Radio>
                    </Stack>
                </RadioGroup>
            </div>

        </div>
    )
}

export default Sorting 
