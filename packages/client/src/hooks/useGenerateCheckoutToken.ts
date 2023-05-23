import { useDispatch } from "react-redux";
import commerce from "../lib/commerce";
import { setCheckoutToken } from "../store/actions";

const useGenerateCheckoutToken = (identifier: string) => {
    const dispatch = useDispatch();
    return async () => {
        const res = await commerce.checkout.generateToken(identifier, { type: "cart" });
        console.log(res);
        dispatch(setCheckoutToken(res.id))
    }
};

export default useGenerateCheckoutToken;