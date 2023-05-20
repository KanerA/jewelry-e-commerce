import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';
import { TProduct } from '../store/types';
import useFetchCartData from '../hooks/useFetchCartData';
import { Link } from 'react-router-dom';

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
            <Link to="/"><div className="returnButton">{"<"} Return To Main</div></Link>
            {cart.map((prod: TProduct) => {
                return <CartItem id={prod.id} price={prod.price} name={prod.name} imageSrc={prod.image.url} quantity={prod.quantity} />
            })}
        </div>
    );
}

export default Checkout;