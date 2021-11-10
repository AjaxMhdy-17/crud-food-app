import React, { useState } from 'react'
import Cart from './Components/Cart/Cart'

import Meals from './Components/Meals/Meals'

const Index = () => {

    const [cart, setCart] = useState([])

    const addToCartHandler = (meal, amount) => {
        if (amount !== null) {

            const isExistItemIndex = cart.findIndex(
                (item) => item.id === meal.id
            )
            const isExistsItemInCart = cart[isExistItemIndex]
            if (isExistsItemInCart) {
                console.log(isExistsItemInCart);
                const updateTotalCart = [...cart] 
                const updateMeal = {...isExistsItemInCart,count : parseInt(isExistsItemInCart.count) + parseInt(amount)}
                updateTotalCart[isExistItemIndex] = updateMeal
                setCart(updateTotalCart)
            }
            else {
                const newMeal = meal
                newMeal.count = parseInt(amount) 
                setCart([...cart, newMeal])
            }

        }
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    const increaseItem = (id) => {
        // console.log(id);
        const findIndex = cart.findIndex( item => item.id === id)
        const findItem = cart[findIndex] 
        const updateItem = {
            ...findItem , 
            count : findItem.count + 1 
        }
        const updateCart = [...cart] 
        updateCart[findIndex] = updateItem
        setCart(updateCart) 
    }

    const decreaseItem = (id) => {
        const findIndex = cart.findIndex(item => item.id === id)
        const findItem = cart[findIndex] 
        if(findItem.count <= 1){
            removeItem(id) 
        }
        else{
            const updateItem = {
                ...findItem , 
                count : findItem.count - 1
            }
            const updatedCart = [...cart]
            updatedCart[findIndex] = updateItem
            setCart(updatedCart)
        }
    }

    const removeAll = () => {
        setCart([])
    }

    return (
        <div>
            <Meals
                addToCartHandler={addToCartHandler}
            />
            <Cart
                cart={cart}
                removeItem={removeItem}
                increaseItem={increaseItem}
                decreaseItem={decreaseItem}
                removeAll={removeAll}
            />
        </div>
    )
}

export default Index
