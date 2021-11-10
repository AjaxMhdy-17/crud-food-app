import React from 'react'

import Available from './Available'
import Summery from './Summery'

const Meals = (props) => {

    return (
        <div>
            <Summery/>
            <Available
                addToCartHandler={props.addToCartHandler}
            />
        </div>
    )
}

export default Meals
