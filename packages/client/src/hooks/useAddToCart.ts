import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";

const useAddToCart = () => {
    const dispatch = useDispatch();
    return async (id: string, qty: number, variant?: any /* for example size of ring */) => {
        await commerce.cart.add(id, qty, variant);
    }
};

export default useAddToCart;