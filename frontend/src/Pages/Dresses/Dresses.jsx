import { Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDress } from '../../Redux/Dress/action';
import ProductBox from '../ProduxtBox/ProductBox';
import Sorting from '../Sorting/Sorting';
import style from "./Dresses.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';


const Dresses = () => {
  const store = useSelector((store) => store.dressManager.dress);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [price, setPrice] = React.useState("");


  useEffect(() => {
    dispatch(getDress());
    console.log(store);
  }, [])

  return (
    <div className={style.container}>
      <div>
        <Sorting pageon={"Dresses"} />
      </div>
      <div>
        <div className={style.datatop}>
          <div>
            <h1> Dresses </h1>
            <h6>28 products</h6>
          </div>
          <div>
            <h2 className={style.sort}> Sort: </h2>
            <Select placeholder='Featured' value={price} onChange={(e) => setPrice(e.target.value)}>
              <option value='asc'>Low to High</option>
              <option value='desc'>High to Low</option>
            </Select>
            <div className={style.pagebox}>
              <button disabled={page <= 1} onClick={() => setPage((prev) => prev - 1)}> <MdArrowBackIosNew size={"30px"} /> </button>
              <h2>{page}</h2>
              <button onClick={() => setPage((prev) => prev + 1)}> <MdArrowForwardIos size={"30px"} /> </button>
            </div>
          </div>
        </div>
        <div className={style.mydress}>
          {store.map((e) => (
            <ProductBox key={e.id} {...e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dresses