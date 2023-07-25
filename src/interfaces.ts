export interface Market {
    total: number;
    products: Products[];
};

export interface Products {
    id: number,
    name: string,
    price: number,
    weight: number,
    section: "food" | "cleaning",
    calories: number | null | undefined,
    expirationDate: Date, 
};