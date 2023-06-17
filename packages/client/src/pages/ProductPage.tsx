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

    const productImages = productById.assets.map((val: TProduct) => val.url);

    const onCartClick = () => {
        const qty = 1; // TODO: change to users choice
        addToCartFunc(id, qty)
    };

    return (
        <div className="productPage">
            <div className="productDetailsContainer">
                <div className="productPageRightSide center">
                    <DescriptionSection product={productById} />
                    <div className='sizeSelectorContainer center' >
                        <div dir="rtl">תבחר/י מידה:</div>
                        <DropdownSelector options={[20, 21, 22]} placeHolder='בחר/י...' />
                    </div>
                    <AddToCart isAdded={false} onCartClick={onCartClick} />
                </div>
                <ImageCarousel productImages={productImages} />
            </div>
        </div >
    );
};

export default ProductPage; 
