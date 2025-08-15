export declare const typeDefs = "#graphql\n\ntype FoodItem {\n\tid: Int!\n\tname: String!\n\tquantity: Int!\n\tdateBought: String!\n\texpiration: String!\n}\n\ntype Query {\n\tfoodItems: [FoodItem]\n}\n";
interface FoodItem {
    id: number;
    name: string;
    quantity: number;
    dateBought: string;
    expiration: string;
}
export declare const resolvers: {
    Query: {
        foodItems: () => FoodItem[];
    };
};
export {};
//# sourceMappingURL=index.d.ts.map