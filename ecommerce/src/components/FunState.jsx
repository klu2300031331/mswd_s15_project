import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './Layout.css';

const FunState = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="funstate-container">
            <h1>Welcome Arrow Functions</h1>
            <h1 className="count-display">Count: {count}</h1>
            <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
            <Button variant="outlined" onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
    );
};

export default FunState;
