import React from 'react';
import { Price } from '../store/types';
import PriceTag from './PriceTag';
import useRemoveFromCart from '../hooks/useRemoveFromCart';

interface ICartItemProps {
    id: string;
    imageSrc: string;
    price: Price;
    name: string;
    quantity: number;
}

const CartItem = (props: ICartItemProps) => {
    const removeFromCart = useRemoveFromCart();
    const onRemoveClick = () => {
        removeFromCart(props.id);
    }
    return (
        <div className="cartItem">
            <main>
                <div className="imageContainer"> {/* TODO: change alt prop */}
                    <img
                        className="singleImage"
                        style={{
                            width: "150px",

                        }}
                        src={props.imageSrc} alt={props.name}
                    />
                    <div>{props.name}</div>
                    <PriceTag price={props.price.formatted_with_symbol} />
                </div>
            </main>
            <aside>
                <div className="totalPrice">{props.quantity * props.price.raw}</div>
                <div>{props.quantity}</div>
                <div className="removeFromCart">
                    <button onClick={onRemoveClick}>X</button>
                </div>
            </aside>
        </div>
    );
};

export default CartItem;