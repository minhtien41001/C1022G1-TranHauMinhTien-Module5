import { useState, useEffect } from "react";

function Selector() {
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState(" ");

    const choice = e => {
        setSelected(e.target.value);
    };

    useEffect(() => {
        switch (selected) {
            case "1":
                setValueSelected("Java");
                break;
            case "2":
                setValueSelected("Angular");
                break;
            case "3":
                setValueSelected("Java Script");
                break;
            case "4":
                setValueSelected("PHP");
                break;
            default:                
        }
    },[selected]
    );

    return(
        <div>
      Khoá học :
      <select
        onChange={e => {
          choice(e);
        }}
      >
        <option value="1">Java</option>
        <option value="2">Angular</option>
        <option value="3">Javascript</option>
        <option value="4">Php</option>
      </select>
      <h2>Your selected: {valueSelected}</h2>
    </div>
    );
}

export default Selector;