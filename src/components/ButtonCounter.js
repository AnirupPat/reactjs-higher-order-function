import React, {useState} from 'react'
import withCounter from './withCounter'; 

function ButtonCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <button onClick={incrementCount}> Clicked {count} Me</button>
        </div>
    )
}

export default withCounter(ButtonCounter)
