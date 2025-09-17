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
`;
export default typeDefs;
