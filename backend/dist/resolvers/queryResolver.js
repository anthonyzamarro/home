import pool from "../db.js";
// const prisma = new PrismaClient()
const resolvers = {
    Query: {
        foodItems: async () => {
            // return await prisma.foodItem.findMany()
            const result = await pool.query("SELECT * FROM food_item");
            return result.rows;
        },
    },
    Mutation: {
        createFoodItem: async (foodItem) => { },
    },
};
export default resolvers;
