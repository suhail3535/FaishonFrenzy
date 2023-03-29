import React from 'react'
import "./PaymentCard.css"

const PaymentCard = () => {
    return (
        <div>
            <div className='paymentCard-cont'>
                <div className='paymentCard-info'>
                    <div className='paymentCard-info-img-div'>
                        <img src="https://images.urbndata.com/is/image/Anthropologie/4130318350035_030_b?fit=constrain&fmt=webp&hei=444&qlt=80" alt="" />
                    </div>
                    <div className='paymentCard-info-cont'>
                        <p>The Somerset Maxi Dress: Cutwork Edition </p>

                        <p> <span>Style:</span># 4130318350035</p>
                        <p><span>Color:</span>GREEN</p>
                        <p><span>Size:</span>XS</p>
                        <p> <span>Fit</span> Standard</p>


                    </div>
                </div>
                <div>$ 220 </div>
                <div className='paymentCard-info-qty'>
                 
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
                        <option value="">10</option>
                    </select>
                </div>
                <div>$ 220</div>



            </div>
        </div>
    )
}

export default PaymentCard