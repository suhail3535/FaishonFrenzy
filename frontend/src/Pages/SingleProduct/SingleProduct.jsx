import React from 'react'
import "./SingleProduct.css"

export const SingleProduct = () => {
    return (
        <div>
            <div className='singleProd-wrapper'>
                <div className='singleProd-cont'>
                    <div className='singleProd-left'>
                        <div className='singleProd-imgDiv'>
                            <img src="https://images.urbndata.com/is/image/Anthropologie/4139952400010_000_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640" alt="" />
                        </div>


                    </div>
                    <div className='singleProd-right'>
                        <div className='right-cont'>
                            <div className='right-top'>
                                <p>Reformation Juliette Dress </p>
                                <a href="/#">Reformation</a>
                                <p>$ 256</p>
                                <p>Or 4 interest-free installments of $62.00 with <br /><span>Kalrna or Afterpay</span></p>


                            </div>
                            <hr style={{ color: "grey", border: "1px solid" }} />
                            <div className='right-middle'>
                                <div className='right-middle-size'>
                                    <p>Sizes</p>
                                    <div className='rht-li'>
                                        <li>0</li>
                                        <li>2</li>
                                        <li>4</li>
                                        <li>6</li>
                                        <li>8</li>
                                        <li>10</li>
                                        <li>12</li>
                                    </div>
                                    <a href="/#">Size Guide</a>
                                    <p>Quantity</p>
                                    <select name="" id="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                        <option value="">6</option>
                                        <option value="">7</option>
                                        <option value="">8</option>
                                        <option value="">9</option>
                                    </select>
                                    <br />
                                    <button>ADD TO BASKET</button>
                                    <br />

                                    <span>
                                        <a href="/#">Add to Registry</a>

                                        <a href="/#">Add to Wishlist</a>
                                    </span>
                                    <div className='middle-random'>
                                        <p>Free on shop Pickup</p>
                                        <p>Please select a size to check store availability. </p>
                                    </div>



                                </div>


                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
