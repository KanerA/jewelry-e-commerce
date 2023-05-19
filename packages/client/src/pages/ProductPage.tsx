import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { IInitialState, TProduct } from '../store/types';
import DescriptionSection from '../components/DescriptionSection';
import SizeSelector from '../components/SizeSelector';
import { useSelector } from 'react-redux';
import { getProductsData } from '../store/selectors';

// TODO: move this helper func somewhere else
function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }

    return argument;
}
//

const ProductPage = () => {
    const paramsArr = useLocation().pathname.split("/");
    const id = paramsArr[paramsArr.length - 1];
    const products: IInitialState["products"] = useSelector(getProductsData);
    const spreadProducts = [...products.bracelets, ...products.earrings, ...products.necklaces, ...products.earrings]

    const productById = ensure(spreadProducts.find((val: TProduct) => {
        return val.id === id
    }));

    return (
        <div dir="rtl" className="productPage">
            <ImageCarousel product={productById} />
            <DescriptionSection product={productById} />
            <div className='sizeSelectorContainer' >
                <div dir="rtl">תבחר/י מידה:</div>
                <SizeSelector sizes={[20, 21, 22]} placeHolder='בחר/י...' />
            </div>
        </div >
    );
};

export default ProductPage;