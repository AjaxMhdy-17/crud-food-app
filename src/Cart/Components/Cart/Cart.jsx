import React from 'react'

import './cart.css' 

const Cart = (props) => {


    const cart = props.cart;


    const totalItem = cart.reduce((total , item) => {
        return total + parseInt(item.count)
    },0)

    let totalPrice = 0 

    for(let i = 0 ; i < cart.length ; i++ ){
        totalPrice += cart[i].count*cart[i].price
    }

    return (
        <div className='cart__box'>
            <h3>total items in cart : {totalItem}</h3>
            {cart.map((item) => (
                <div key={item.id} className='cart__item'>
                    <span>{item.name}</span>
                    <span style={{margin : "0 10px"}}>{item.count}</span>
                    <span>
                        <button
                            onClick={() => props.increaseItem(item.id)}
                        >
                            +
                        </button>
                        <button
                            onClick={() => props.decreaseItem(item.id)}
                        >
                            -
                        </button>
                    </span>
                    <span style={{margin : "0 10px"}}>unit price : {item.price}</span>
                    <span>x {item.count} = {(item.count*item.price).toFixed(2)} </span>
                    <span>
                        <button
                            onClick={() => props.removeItem(item.id)}
                        >
                            x 
                        </button>
                    </span>
                </div>
            ))}
            <div className="cart__total">
                <h4>total price : {totalPrice.toFixed(2)}</h4>
            </div>
            <button
                onClick={props.removeAll}
            >
                remove all 
            </button>
        </div>
    )
}

export default Cart
