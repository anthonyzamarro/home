import { FoodItem } from "src/index.js"
import pool from "../db.js"

const resolvers = {
  Query: {
    foodItems: async () => {
      const result = await pool.query("SELECT * FROM food_item")
      return result.rows
    },
  },
  Mutation: {
    createFoodItem: async (foodItem: FoodItem) => {},
  },
}

export default resolvers
