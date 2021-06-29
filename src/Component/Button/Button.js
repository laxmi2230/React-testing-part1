import React, { useState } from 'react'

function Button() {
    const [value, setValue] = useState("Press Here");


    const dummyFunction = () => {
        setValue("You Clicked!!");
    }
    return (
        <button onClick={dummyFunction} title="dummyButton">
            {value}
        </button>
    );
}

export default Button;
