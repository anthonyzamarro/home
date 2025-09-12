const typeDefs = `#graphql
	type FoodItem {
		id: Int!
		name: String!
		quantity: Int!
		dateBought: String!
		expiration: String!
	}

	type Query {
		foodItems: [FoodItem]
	}
`

interface FoodItem {
  id: number
  name: string
  quantity: number
  dateBought: string
  expiration: string
}

export default typeDefs
