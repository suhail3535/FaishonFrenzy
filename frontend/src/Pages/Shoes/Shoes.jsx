import React, { useEffect, useState } from "react";
import style from "./Shoes.module.css"; 
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useLocation, useSearchParams } from "react-router-dom";
import { getShoes } from "../../Redux/shoes/action";
import Sorting from "../Sorting/Sorting";
import ProductBox from "../ProduxtBox/ProductBox";
import Skeletonbox from "../Skeleton/Skeleton";

const Shoes = () => {
  const {shoes, isLoading} = useSelector((store) => store.shoesReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState("");
  const location = useLocation();
  const [serchParams] = useSearchParams();
  const limit = 12;  
  const emptybox = [1,2,3,4,5,6,7,8,9];

  let obj = {
    params: {
      brand: serchParams.getAll("brand"),
      // _sort: serchParams.get("rating") && "rating",
      rating: serchParams.get("rating"),
      sort: serchParams.get("price"),
      page: serchParams.get("page"),
      limit: limit,
    },
  };

  useEffect(() => {
    dispatch(getShoes(obj));
  }, [location.search, page]);

  return (
    <div>
      <div className={style.static}>
        <h3> 5-5.5 </h3>
        <h3> 6-6.5 </h3>
        <h3> 7-7.5 </h3>
        <h3> 8-8.5 </h3>
        <h3> 9-9.5 </h3>
      </div>
      <div className={style.container}>
        <div className={style.sortbox}>
          <Sorting pageon={"Dresses"} price={price} page={page} limit={limit} />
        </div>
        <div>
          <div className={style.datatop}>
            <div>
              <h1> Shoes </h1>
              <h6>28 products</h6>
            </div>
            <div>
              <h2 className={style.sort}> Sort: </h2>
              <Select
                placeholder="Featured"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </Select>
              <div className={style.pagebox}>
                <button
                  disabled={page <= 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <MdArrowBackIosNew size={"30px"} />
                </button>
                <h2>{page}</h2>
                <button onClick={() => setPage((prev) => prev + 1)}>
                  <MdArrowForwardIos size={"30px"} />
                </button>
              </div>
            </div> 
          </div> 
          <div className={style.mydress}>
            {isLoading ? emptybox.map((e)=>(
              <Skeletonbox key={e} /> 
            )) : shoes.map((e) => (
              <ProductBox key={e.id} {...e} category="shoes" />
            ))}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoes


