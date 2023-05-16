import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../store/selectors';
import ProductsGallery from '../components/ProductsGallery';

function Favorites(props: any) {
    const favorites = useSelector(getFavorites);

    return (
        <div className="favoritesPage">
            Your Favorite Choices!
            <ProductsGallery productType={props.productType} products={favorites} key={`favorites`} />
        </div>
    );
}

export default Favorites;