"use client"

import styles from "./page.module.css"
import { gql } from "@apollo/client"
import { FoodItem } from "./components/FoodItem"
import { useQuery } from "@apollo/client/react"

interface FoodItem {
  id: number
  name: string
  quantity: string
}

export default function Home() {
  const FOOD_ITEMS = gql`
    query GetFoodItems {
      foodItems {
        id
        name
        quantity
      }
    }
  `

  const { loading, error, data: { foodItems } = { foodItems: [] } } = useQuery<{ foodItems: FoodItem[] }>(FOOD_ITEMS)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    console.log({ error })
    return <p>Error</p>
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
        {foodItems.map(({ id, name, quantity }: FoodItem) => {
          return <FoodItem name={name} quantity={quantity} key={id} />
        })}
      </main>
    </div>
  )
}
