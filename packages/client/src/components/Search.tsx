import React, { useState, useEffect } from 'react';

function Search() {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    // const onFocusClick = () => { };
    // const onSearchClick = () => { };
    // useEffect(() => console.log(isFocus), [isFocus]);
    return (
        <div onClick={() => setIsFocus} className="searchComponent">
            {/* <span onClick={onSearchClick}>Search</span> */}
        </div>
    );
}

export default Search;