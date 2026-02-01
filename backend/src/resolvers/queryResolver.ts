import { FoodItem } from "src/index.js"
import pool from "../db.js"
import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient()

const resolvers = {
  Query: {
    foodItems: async () => {
      // return await prisma.foodItem.findMany()
      const result = await pool.query("SELECT * FROM food_item")
      return result.rows
    },
  },
  Mutation: {
    createFoodItem: async (foodItem: FoodItem) => {},
  },
}

export default resolvers
