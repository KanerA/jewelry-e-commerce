import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setProductsData } from "../store/actions";

const useAddToCart = () => {
    const dispatch = useDispatch();
    return async (id: string, qty: number) => {
        await commerce.cart.add(id, qty)
        // dispatch(addProductToCart());
    }
};

export default useAddToCart;