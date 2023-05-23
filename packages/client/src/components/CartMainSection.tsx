import React from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from '../store/types';
import CartItem from './CartItem';
import useFetchCartData from '../hooks/useFetchCartData';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';

const CartMainSection = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchCartFunc = useFetchCartData();
    const cart = useSelector(getCartData);
    React.useEffect(() => {
        console.log(cart)
        fetchCartFunc().then(res => {
            setIsLoading(false);
        });
    }, [])
    if (isLoading) {
        return <main className="cartMainSection"><div id="cartLoader">Loading...</div></main>; {/** change to loader */ }
    }
    return (
        <main className="cartMainSection">
            <Link to="/"><div className="returnButton">{"<"} Return To Main</div></Link>
            {cart.map((prod: TProduct) => {
                return <CartItem id={prod.id} price={prod.price} name={prod.name} imageSrc={prod.image.url} quantity={prod.quantity} />
            })}
        </main>
    );
};

export default CartMainSection;