import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setCartData } from "../store/actions";

const useFetchCartData = () => {
    const dispatch = useDispatch();
    return async () => {
        try {
            const cartProducts = await commerce.cart.contents();
            dispatch(setCartData(cartProducts));
        } catch (err) {
            console.log(err);
        }
    }
};

export default useFetchCartData;