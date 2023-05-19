import React from 'react';
import commerce from '../lib/commerce';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';
import { TProduct } from '../store/types';
import useFetchCartData from '../hooks/useFetchCartData';

function Checkout(props: any) {
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
        return <div className="App">Loading...</div>;
    }
    return (
        <div>
            {cart.map((prod: TProduct) => {

                return <CartItem imageSrc={prod.image.url} />
            })}
        </div>
    );
}

export default Checkout;