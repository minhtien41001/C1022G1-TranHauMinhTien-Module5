import { useState } from "react";

function Counter2(){
    const [number,setNumber] = useState(0);

    const increase = () =>{
        setNumber(number + 2);
    };

    return(
        <div>
            <h1>Counter 2: {number}</h1>
            <button onClick={increase}>Add 2</button>
        </div>
    );
};

export default Counter2;