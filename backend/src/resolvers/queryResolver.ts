import pool from "../db.js"

const resolvers = {
  Query: {
    foodItems: async () => {
      const result = await pool.query("SELECT * FROM food_item")
      return result.rows
    },
  },
}

export default resolvers
