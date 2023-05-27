import { useSelector } from "react-redux";
import commerce from "../lib/commerce";
import { getCheckoutToken } from "../store/selectors";

const useCheckQuantity = () => {
    const checkoutToken = useSelector(getCheckoutToken);
    return async (product: any, index: number): Promise<boolean> => {
        const res = await commerce.checkout.checkQuantity(checkoutToken, product.id, { amount: product.quantity, permalink: product.permalink });
        return res.available;
    };
};

export default useCheckQuantity;