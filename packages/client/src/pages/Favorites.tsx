import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites, getProductsData } from '../store/selectors';
import ProductsGallery from '../components/ProductsGallery';
import { spreadProductsState } from '../utils/helpersProducts';
import { TProduct } from '../store/types';

function Favorites(props: any) {
    const favoritesIds = useSelector(getFavorites);
    const productsData = useSelector(getProductsData);
    const favoritesData = favoritesIds.reduce((prev: any[], id: string) => {
        spreadProductsState(productsData).forEach((val: TProduct) => val.id === id ? prev.push(val) : prev);
        return prev;
    }, []);

    return (
        <div className="favoritesPage">
            Your Favorite Choices!
            <ProductsGallery productType={props.productType} products={favoritesData} key={`favorites`} />
        </div>
    );
}

export default Favorites;