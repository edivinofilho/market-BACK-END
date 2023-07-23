interface Products {
    id: number,
    name: string,
    price: number,
    weight: number,
    section: string,
    calories: number | null | undefined,
    expirationDate: Date, 
};

export default Products;