import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const LeftArrow = ({ onLeftClick, iconsColor }: any) => {
    return (
        <div
            className="leftArrow"
            onClick={onLeftClick}
        ><IoIosArrowBack size={20} color={iconsColor} /></div>
    );
};

export default LeftArrow;