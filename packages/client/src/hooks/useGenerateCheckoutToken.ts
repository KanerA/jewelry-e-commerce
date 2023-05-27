import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setCheckoutToken } from "../store/actions";

const useGenerateCheckoutToken = (identifier: string) => {
    const dispatch = useDispatch();
    return async () => {
        try {
            const res = await commerce.checkout.generateToken(identifier, { type: "cart" });
            console.log(res);
            dispatch(setCheckoutToken(res.id))
        } catch (err: any) {
            if (err.statusCode === 422) console.log("Cart is empty")
        }
    }
};

export default useGenerateCheckoutToken;