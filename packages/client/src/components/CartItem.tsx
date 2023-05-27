import React, { useEffect, useState } from 'react';
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
                <CartItemQuantity quantity={quantity} onAddClick={onAddClick} onLessClick={onLessClick} />
                <div className="removeFromCart">
                    <button onClick={onRemoveClick}>X</button>
                </div>
            </aside>
        </div>
    );
};

export default CartItem;