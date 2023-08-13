import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.REACT_APP_PUBLIC_COMMERCE_KEY!;
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
    axiosConfig: {
        headers: {
            'X-Chec-Agent': 'commerce.js/v2',
            'Chec-Version': '2021-09-29',
        },
    },
};

const commerce = new Commerce(
    checAPIKey,
    devEnvironment,
    commerceConfig,
);

export default commerce;
// export default {}
