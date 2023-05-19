import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setProductsData } from "../store/actions";

const useFetchProductsData = () => {
    const dispatch = useDispatch();
    return async () => {
        const products = await commerce.products.list({ limit: 30 });
        dispatch(setProductsData(products.data));
    }
};

export default useFetchProductsData;