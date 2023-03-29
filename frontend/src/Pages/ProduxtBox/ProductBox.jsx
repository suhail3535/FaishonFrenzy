import React from 'react'
import style from "./ProductBox.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductBox = ({ name, img, price }) => {
    return (
        <div className={style.head}> 
            {img ? <img src={img} alt="product-img" /> : <Skeleton height={"200px"} />}
            <h4>{name ? name : <Skeleton />}</h4>
            <p>₹{price ? price : <Skeleton />}</p>
        </div>
    )
}

export default ProductBox 