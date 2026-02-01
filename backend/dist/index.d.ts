declare const typeDefs = "#graphql\n\ttype FoodItem {\n\t\tid: Int!\n\t\tname: String!\n\t\tquantity: Int!\n\t\tdateBought: String!\n\t\texpiration: String!\n\t}\n\n\ttype Query {\n\t\tfoodItems: [FoodItem]\n\t}\n\n\ttype Mutation {\n\t\tcreateFoodItem: Boolean\n\t}\n";
export interface FoodItem {
    id: number;
    name: string;
    quantity: number;
    dateBought: string;
    expiration: string;
}
export default typeDefs;
//# sourceMappingURL=index.d.ts.map