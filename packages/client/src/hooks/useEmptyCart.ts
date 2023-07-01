import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setCartData } from "../store/actions";

const useEmptyCart = () => {
    const dispatch = useDispatch();
    return async () => {
        try {
            await commerce.cart.empty();
            dispatch(setCartData([]));
        } catch (err) {
            console.log(err);
        }
    }
}

export default useEmptyCart;