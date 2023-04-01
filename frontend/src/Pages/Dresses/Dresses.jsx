import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDress } from "../../Redux/Dress/action";
import ProductBox from "../ProduxtBox/ProductBox";
import Sorting from "../Sorting/Sorting";
import style from "./Dresses.module.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useLocation, useSearchParams } from "react-router-dom";
import Skeletonbox from "../Skeleton/Skeleton";

const Dresses = () => {
  const {isLoading,dress} = useSelector((store) => store.dressManager);
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
    dispatch(getDress(obj));
  }, [location.search, page]);

  return (
    <div>
      <div className={style.static}>
        <h3> WEDDING DRESSES </h3>
        <h3> CASUAL DRESSES </h3>
        <h3> PARTY DRESSES </h3>
        <h3> WORK DRESSES </h3>
        <h3> VACATION DRESSES </h3>
      </div>
      <div className={style.container}>
        <div className={style.sortbox}>
          <Sorting pageon={"Dresses"} price={price} page={page} limit={limit} />
        </div>
        <div>
          <div className={style.datatop}>
            <div>
              <h1> Dresses </h1>
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
            )) : dress.map((e) => (
              <ProductBox key={e.id} category="dress" {...e} />
            ))} 
          </div> 
          <div className={style.pageboxbottom}>
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
    </div>
  );
};

export default Dresses;
