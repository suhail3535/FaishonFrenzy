import React from 'react'
import style from "./ProductBox.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

const ProductBox = ({_id, name, img, price,category}) => { 

    return (
        <Link to={`/${category}/${_id}`} className={style.head}> 
            {img ? <img src={img} alt="product-img" /> : <Skeleton height={"200px"} />}
            <h4>{name ? name : <Skeleton />}</h4>
            <p>₹{price ? price : <Skeleton />}</p> 
        </Link> 
    )
}

export default ProductBox 