import React, { useRef, useState } from 'react'

import './mealsStyle.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];



const Available = (props) => {

    const countRef = useRef([]);
    
    const [isEmpty , setIsEmpty] = useState([false , false , false , false])

    const submit = (e , i) => {
        e.preventDefault() 
        if(countRef.current[i].value === ''){
            setIsEmpty(prevState => prevState.map((item, idx) => idx === i ? !item : item))
        }
        else{
            countRef.current[i].value = '' 
            setIsEmpty([false , false , false , false])
        }
    }



    return (
        <div>

            <div className='meal__box'>
                {DUMMY_MEALS.map((meal,i) => (
                    <div key={meal.id} className="meal_item">
                        <h3>{meal.name}</h3>
                        <p>{isEmpty[i] === true ? ("enter a amount") : ('')}</p>
                            <p>
                                <input
                                    type="number"
                                    ref={el => countRef.current[i] = el}
                                    min='1'
                                />
                            </p>
                            <button
                                className='add__button'
                                onClick={
                                    (e) =>  {
                                        const count = countRef.current[i].value ? countRef.current[i].value : null
                                        submit(e , i)
                                        props.addToCartHandler(meal , count)
                                    }
                                }
                            >
                                Add to Cart
                            </button>
                
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Available
