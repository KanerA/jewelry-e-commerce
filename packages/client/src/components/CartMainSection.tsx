import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import LeftArrow from './LeftArrow';
import { TProduct } from '../store/types';
import useFetchCartData from '../hooks/useFetchCartData';

interface ICartMainSectionProps {
    cartData: TProduct[];
}

const CartMainSection = (props: ICartMainSectionProps) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchCartFunc = useFetchCartData();

    const dataToDisplay = (cartData: TProduct[]): TProduct[] => {
        return cartData.reduce((prev, curr) => {
            if (curr.quantity !== 0) prev.push(curr);
            return prev;
        }, [] as TProduct[]);
    }

    useEffect(() => {
        if (!props.cartData) {
            fetchCartFunc().then(res => {
                setIsLoading(false);
            });
        } else {
            setIsLoading(false)
        }
    }, [fetchCartFunc]);
    if (isLoading) {
        // change to loader
        return <main className="cartMainSection"><div id="cartLoader">Loading...</div></main>;
    }

    if (props.cartData.length === 0) return <div className="cartMainSection center bigFont emptyCartText">Your Cart is Empty, Go Add Some Stuff ;)</div>
    return (
        <div>
            <Link to="/"><div className="returnButton"><span>המשיכו לרכישה באתר</span><LeftArrow iconsColor="#000000" /></div></Link>
            <main className="cartMainSection">
                {dataToDisplay(props.cartData).map((prod: TProduct) => {
                    return <CartItem
                        id={prod.id}
                        price={prod.price}
                        name={prod.product_meta.nameEnglish}
                        imageSrc={prod.image.url}
                        quantity={prod.quantity}
                        sizes={prod.selected_options.map((val: any) => val?.option_name)}
                    />
                })}
            </main>
        </div>
    );
};

export default CartMainSection;