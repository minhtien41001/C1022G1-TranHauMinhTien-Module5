import { useState } from "react";

function Counter1() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    };

    return (
        <div>
            <h1>Count1: {number}</h1>
            <button onClick={increase}>Add 1</button>
        </div>
    );
};

export default Counter1;