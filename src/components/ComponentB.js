import React from 'react';
import { useDispatch } from 'react-redux';

const ComponentB = () => {
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch({
            type: 'SET_INPUT_VALUE',
            payload: event.target.value
        });
    };

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
        </div>
    );
};

export default ComponentB