import React, { useState } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    const handleSubtract = () => {
        setCounter( counter - 1 );
    }
    
    return (
        <>
            <h4>CounterApp</h4>
            <h5> { counter } </h5>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleReset } >Reset</button>
            <button onClick={ handleSubtract } >-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 1
}

export default CounterApp;