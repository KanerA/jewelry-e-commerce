import { useDispatch } from "react-redux";
import commerce from "../lib/commerce"
import { setCartId } from "../store/actions";

const useFetchCartId = () => {
    const dispatch = useDispatch();
    return async () => {
        const id = await commerce.cart.id();
        if (!id) {
            console.error("something went wrong, try again");
        }
        dispatch(setCartId(id as unknown as string))
    }
}

export default useFetchCartId;