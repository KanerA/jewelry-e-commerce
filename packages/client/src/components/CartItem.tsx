import React, { useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { BiShekel } from 'react-icons/bi';

import { Price } from '../store/types';
import PriceTag from './PriceTag';
import useRemoveFromCart from '../hooks/useRemoveFromCart';
import CartItemQuantity from './CartItemQuantity';
import useUpdateCartItemQuantity from '../hooks/useUpdateCartItemQuantity';
import useFetchCartData from '../hooks/useFetchCartData';

interface ICartItemProps {
    id: string;
    imageSrc: string;
    price: Price;
    name: string;
    quantity: number;
}

const CartItem = (props: ICartItemProps) => {
    const [quantity, setQuantity] = useState<number>(props.quantity);
    const removeFromCart = useRemoveFromCart();
    const updateCartItemQuantity = useUpdateCartItemQuantity();
    const fetchCartFunc = useFetchCartData();

    const onRemoveClick = () => {
        removeFromCart(props.id);
    };

    const updateItemQuantity = async (qty: number) => {
        try {
            await updateCartItemQuantity(props.id, qty);
        } catch (err) {
            console.log(err);
        }
    };

    const onAddClick = async () => {
        try {
            await updateItemQuantity(quantity + 1);
            setQuantity(prev => prev + 1);

        } catch (err) {
            console.log(err);
        }
    }
    const onLessClick = async () => {
        try {
            await updateItemQuantity(quantity - 1);
            setQuantity(prev => prev - 1 <= 0 ? 0 : prev - 1);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCartFunc();
    }, [quantity])
    return (
        <div className="cartItem">
            <main>
                <div className="imageContainer">
                    <img
                        className="singleImage"
                        src={props.imageSrc} alt={props.name}
                    />
                    <div className="namePriceContainer">
                        <div className="itemName">{props.name}</div>
                        <PriceTag price={props.price.formatted_with_symbol} />
                    </div>
                </div>
            </main>
            <aside>
                <CartItemQuantity quantity={quantity} onAddClick={onAddClick} onLessClick={onLessClick} />
                <div className="totalPrice center"><span>{props.quantity * props.price.raw}</span><BiShekel /></div>
                <div className="removeFromCart">
                    <button onClick={onRemoveClick}><MdDeleteOutline size={25} /></button>
                </div>
            </aside>
        </div>
    );
};

export default CartItem;