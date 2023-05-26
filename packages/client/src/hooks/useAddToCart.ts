import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";

const useAddToCart = () => {
    const dispatch = useDispatch();
    return async (id: string, qty: number) => {
        await commerce.cart.add(id, qty);
    }
};

export default useAddToCart;