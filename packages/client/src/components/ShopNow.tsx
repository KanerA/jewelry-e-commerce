import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useGetCategoriesData from '../hooks/useGetCategoriesData';

const ShopNow = () => {
    const [categories, setCategories] = useState<any>([]);
    const fetchCategories = useGetCategoriesData();

    useEffect(() => {
        const a = async () => {
            const { data } = await fetchCategories();
            const tempData = data.map((val: any) => {
                return {
                    id: val.id,
                    catName: val.slug,
                    coverImageUrl: val?.assets?.[0]?.url,
                    size: val?.assets?.[0]?.image_dimensions?.width
                }
            });

            tempData.sort((a: any, b: any) => a.size - b.size);
            setCategories(tempData);
        };
        a();
    }, []);

    return (
        <div id="collections" className="collections">
            <div className='collectionsTitle'>MY COLLECTION</div>
            <div className="collectionsLinksContainer">
                {
                    !categories.length && <div>LOADING!!</div>
                }
                {
                    !!categories.length && categories.map((category: any) => {
                        return <Link className='center' to={`/${category.catName}`}>
                            <div id={`${category.catName}`} className="coverImageContainer center">
                                <img className="coverImages center" src={category.coverImageUrl} />
                                <div className="textOverlay">{category.catName.toUpperCase()}</div>
                            </div>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default ShopNow;