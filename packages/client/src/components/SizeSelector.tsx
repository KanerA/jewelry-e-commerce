import React, { useState, useEffect } from 'react';
import "../styles/sizeSelector.css"

const Icon = () => {
    return (
        <svg height="20" width="20" viewBox="0 0 20 20">
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
        </svg>
    );
};

const SizeSelector = ({ sizes, placeHolder }: { sizes: number[], placeHolder: string }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<number>(0);

    const handleInputClick = (e: any) => {
        e.stopPropagation();
        setShowMenu(prev => !prev);
    }
    const getDisplay = () => {
        if (selectedValue) return selectedValue;
        return placeHolder;
    };

    const onItemClick = (size: number) => setSelectedValue(size);

    const isSelected = (size: number) => {
        if (!selectedValue) {
            return false;
        }
        return size === selectedValue;
    }

    useEffect(() => {
        const handler = () => setShowMenu(false);
        window.addEventListener("click", handler);
        return () => window.removeEventListener("click", handler);
    }, []);

    return (
        <div className="dropdown-container">
            <div onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon />
                    </div>
                </div>
            </div>
            {showMenu && <div className="dropdown-menu">
                {sizes.map(size => (
                    <div
                        key={`size-${size}`}
                        dir="rtl"
                        onClick={() => onItemClick(size)}
                        className={`dropdown-item ${isSelected(size) && "selected"}`}
                    >
                        {size}
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default SizeSelector;