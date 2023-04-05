import { useState } from "react";
import { render } from "react-dom";

function Count(){
    let [count,setCount] = useState(0);

    const handleClick = () =>{
        const newValue = count + 1;
        setCount(newValue);
    }

    return(
        <div>
            Gia' tri. {count}
            <div>
                <button onClick={handleClick}>Tang</button>
            </div>
        </div>
    );
}

export default Count;