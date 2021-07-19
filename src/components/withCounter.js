import React, {useState} from 'react'

const UpdatedComponent = (OriginalComponent) => {
    function WithCounter() {
        const [counter, setCounter] = useState(0);
        const handlerButtonClick = () => {
        setCounter(prevState => ++prevState);
    }
        return (
            <OriginalComponent count={counter} incrementCount={handlerButtonClick} />
        )
    }
    return WithCounter;
}

export default UpdatedComponent;
