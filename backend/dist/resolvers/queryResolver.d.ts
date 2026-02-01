import { FoodItem } from "src/index.js";
declare const resolvers: {
    Query: {
        foodItems: () => Promise<any[]>;
    };
    Mutation: {
        createFoodItem: (foodItem: FoodItem) => Promise<void>;
    };
};
export default resolvers;
//# sourceMappingURL=queryResolver.d.ts.map