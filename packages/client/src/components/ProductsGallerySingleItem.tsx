import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PriceTag from './PriceTag';
import AddToCart from './AddToCart';
import FavoriteIcon from './FavoriteIcon';
import * as actions from '../store/actionTypes';
import { getFavorites } from '../store/selectors';
import { useSelector } from 'react-redux';
import { TProduct } from '../store/types';
import { Link } from 'react-router-dom';
import useAddToCart from '../hooks/useAddToCart';
import { actionAddFavorite, actionRemoveFavorite } from '../store/actions';

const ProductsGallerySingleItem = (props: any) => {
    const dispatch = useDispatch();
    const addToCartFunc = useAddToCart();
    const favorites = useSelector(getFavorites);
    const itemInitialFavState = favorites.find((val: TProduct) => val.id === props.id);

    const [isFavorite, setIsFavorite] = useState<boolean>(!!itemInitialFavState);

    const onFavoriteClick = (e: any) => {
        e.preventDefault();
        !isFavorite ? dispatch(actionAddFavorite(props.id)) : dispatch(actionRemoveFavorite(props.id));
        setIsFavorite(prev => !prev);
    };

    const onCartClick = (e: any) => {
        e.preventDefault()
        const qty = 1; // change to users choice
        addToCartFunc(props.id, qty)
    };

    const removePTag = (text: string): string => {
        const temp = text?.split("<p>");
        const temp2 = temp?.[0] == "" ? temp?.[1] : temp?.[0];
        return temp2?.split("</p>")?.[0];
    };


    return (
        <div
            className="gallerySingleItem">
            <Link to={`/product/${props.id}`}>
                <div className="itemContainer"> {/* TODO: change alt prop */}
                    <img
                        className="itemImage"
                        src={props.imageSrc} alt={props.nameEnglish}
                    />
                    <SingleItemDetails
                        name={props.name}
                        description={removePTag(props.description)}
                        price={props.price.formatted_with_symbol}
                        onCartClick={onCartClick}
                        isFavorite={isFavorite}
                        onFavoriteClick={onFavoriteClick}
                    />
                </div>

            </Link>
        </div>
    );
};

export const SingleItemDetails = (props: any) => {
    return <div className='itemDetails center'>
        <div className='productDataContainer'>
            <div className="itemName">{props.name}</div>
            <PriceTag price={props.price} />
        </div>
        <div className="actionButtons">
            <FavoriteIcon onClick={props.onFavoriteClick} isFavorite={props.isFavorite} />
            <AddToCart isAdded={false} onCartClick={props.onCartClick} />
        </div>
    </div>
};

export default ProductsGallerySingleItem;