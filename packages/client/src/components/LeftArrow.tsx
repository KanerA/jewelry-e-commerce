import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const LeftArrow = ({ onLeftClick, iconsColor }: any) => {
    const [size, setSize] = useState(20);
    return (
        <div
            className="leftArrow"
            onClick={onLeftClick}
            onMouseOver={() => setSize(25)}
            onMouseLeave={() => setSize(20)}
        ><IoIosArrowBack size={size} color={iconsColor} /></div>
    );
};

export default LeftArrow;