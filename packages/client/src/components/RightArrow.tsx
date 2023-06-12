import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const RightArrow = ({ onRightClick, iconsColor }: any) => {
    return (
        <div
            className="rightArrow"
            onClick={onRightClick ? onRightClick : () => { }}
        ><IoIosArrowForward size={20} color={iconsColor} /></div>
    );
};

export default RightArrow;