export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock_id: number;
    user_id: number;
    stock: {
        id: number,
        name: string
    }
}