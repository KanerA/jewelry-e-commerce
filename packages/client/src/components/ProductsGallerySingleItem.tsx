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

    const onCartClick = () => {
        const qty = 1; // change to users choice
        addToCartFunc(props.id, qty)
    };

    return (
        <div
            // dir='rtl'

            className="gallerySingleItem">
            <Link to={`/product/${props.id}`}> {/* TODO: change to id */}
                <div className="imageContainer"> {/* TODO: change alt prop */}
                    <img
                        className="singleImage"
                        style={{
                            width: "150px",

                        }}
                        src={props.imageSrc} alt={props.nameEnglish}
                    />
                    <FavoriteIcon onClick={onFavoriteClick} isFavorite={isFavorite} />
                </div>
                <div className="itemName">{props.name}</div>
                <div className="itemDescription">{props.description}</div>
                <PriceTag price={props.price.formatted_with_symbol} />
            </Link>
            <AddToCart isAdded={false} onCartClick={onCartClick} />
        </div>
    );
};

export default ProductsGallerySingleItem;