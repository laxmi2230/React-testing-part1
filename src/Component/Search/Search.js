import React, { useState } from 'react'

function Search() {
    const [inputValue, setInputvlaue] = useState("");
    const handleChange = (event) => {
        setInputvlaue(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleChange} title="dummySearch" />
        </div>
    )
}

export default Search;
