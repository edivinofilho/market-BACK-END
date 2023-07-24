import Products from "./interfaces";

interface Market {
    total: number;
    products: Products[];
}

const market: Market = {
    total: 0,
    products: []
};

export default market;