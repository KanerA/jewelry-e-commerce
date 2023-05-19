import React from 'react';

const CartItem = (props: any) => {
    return (
        <div className="cartItem">
            <div className="imageContainer"> {/* TODO: change alt prop */}
                <img
                    className="singleImage"
                    style={{
                        width: "150px",

                    }}
                    src={props.imageSrc} alt={props.nameEnglish}
                />
            </div>
        </div>
    );
};

export default CartItem;