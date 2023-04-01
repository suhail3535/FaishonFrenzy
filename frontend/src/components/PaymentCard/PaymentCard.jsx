import React from 'react'
import "./PaymentCard.css"

const PaymentCard = ({ title, image, price, name, rating }) => {
    const [qty, setQty] = React.useState(1)
    console.log(qty)

    const handleChange = () => [

    ]
    return (
        <div>
            <div className='paymentCard-cont'>
                <div className='paymentCard-info'>
                    <div className='paymentCard-info-img-div'>
                        <img src={image} alt="" />
                    </div>
                    <div className='paymentCard-info-cont'>
                        <p>{title} </p>

                        <p> <span>Style:</span># 4130318350035</p>
                        <p><span>Color:</span>GREEN</p>
                        <p><span>Size:</span>XS</p>
                        <p> <span>Fit</span> Standard</p>


                    </div>
                </div>
                <div>$ {price} </div>
                <div className='paymentCard-info-qty'>

                    <select onChange={(e) => setQty(e.target.value)} name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>$ {Number(qty)*price}</div>



            </div>
        </div>
    )
}

export default PaymentCard