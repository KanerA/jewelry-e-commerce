import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { IInitialState, TProduct } from '../store/types';
import DescriptionSection from '../components/DescriptionSection';
import DropdownSelector from '../components/DropdownSelector';
import { useSelector } from 'react-redux';
import { getProductsData } from '../store/selectors';
import { spreadProductsState } from '../utils/helpersProducts';
import AddToCart from '../components/AddToCart';
import useAddToCart from '../hooks/useAddToCart';

// TODO: move this helper func somewhere else
function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}
//

const ProductPage = () => {
    const id = useLocation().pathname.split("/")[2];
    const addToCartFunc = useAddToCart();
    const products: IInitialState["products"] = useSelector(getProductsData);

    const spreadProducts = spreadProductsState(products);
    const productById = ensure(spreadProducts.find((val: TProduct) => {
        return val.id === id
    }));

    const onCartClick = () => {
        const qty = 1; // change to users choice
        addToCartFunc(id, qty)
    };

    return (
        <div dir="rtl" className="productPage">
            <ImageCarousel product={productById} />
            <DescriptionSection product={productById} />
            <div className='sizeSelectorContainer' >
                <div dir="rtl">תבחר/י מידה:</div>
                <DropdownSelector options={[20, 21, 22]} placeHolder='בחר/י...' />
            </div>
            <AddToCart isAdded={false} onCartClick={onCartClick} />
        </div >
    );
};

export default ProductPage; 
