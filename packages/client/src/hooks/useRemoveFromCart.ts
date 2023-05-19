import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setProductsData } from "../store/actions";

const useRemoveFromCart = () => {
    const dispatch = useDispatch();
    return async (id: string) => {
        await commerce.cart.remove(id);
        // dispatch(removeFromCart(id));
    }
};

export default useRemoveFromCart;