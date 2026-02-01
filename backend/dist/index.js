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

	type Mutation {
		createFoodItem: Boolean
	}
`;
export default typeDefs;
