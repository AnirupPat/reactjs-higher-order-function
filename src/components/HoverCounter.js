import React, {useState} from 'react';
import UpdatedComponent from './withCounter'; 


function HoverCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>
                 Hovered {count} times</h2>
        </div>
    )
}

export default UpdatedComponent(HoverCounter)
