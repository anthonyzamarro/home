
export const typeDefs = `#graphql

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
	id: string
	name: string
	quantity: number
	dateBought: string
	expiration: string
}

const foodItems: FoodItem[]  = [
{
	id: 1,
	name: 'Apple',
	quantity: 5,
	dateBought: '2025-08-10',
	expiration: '2025-08-17',
},

{
	id: 2,
	name: 'Banana',
	quantity: 5,
	dateBought: '2025-08-10',
	expiration: '2025-08-17',
},
{
	id: 3,
	name: 'Whole chicken',
	quantity: 1,
	dateBought: '2025-08-10',
	expiration: '2025-08-17',
}
]

export const resolvers = {
Query: {
	foodItems, FoodItems
       }
}
