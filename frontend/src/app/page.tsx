"use client"

import styles from "./page.module.css"
import { gql } from "@apollo/client"
import { FoodItem } from "./components/FoodItem"
import { useQuery } from "@apollo/client/react"

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

  const { loading, error, data } = useQuery(FOOD_ITEMS)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  console.log({ data })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
        <FoodItem name={""} quantity={""} />
      </main>
    </div>
  )
}
