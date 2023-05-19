import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setCartData, setProductsData } from "../store/actions";

const useFetchCartData = () => {
    const dispatch = useDispatch();
    return async () => {
        const cartProducts = await commerce.cart.contents()
        dispatch(setCartData(cartProducts));
    }
};

export default useFetchCartData;