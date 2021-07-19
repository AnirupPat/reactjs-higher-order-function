import React, {useState} from 'react'

const withCounter = (WrappedComponent) => {
    function WithCounter() {
        const [counter, setCounter] = useState(0);
        const handlerButtonClick = () => {
        setCounter(prevState => ++prevState);
    }
        return (
            <WrappedComponent count={counter} incrementCount={handlerButtonClick} />
        )
    }
    return WithCounter;
}

export default withCounter;
