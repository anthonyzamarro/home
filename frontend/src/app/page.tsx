'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useQuery, gql } from '@apollo/client'
import { client  } from './main.tsx';
import { FoodItem } from './components/FoodItem'

export default function Home() {
    const FOOD_ITEMS =  gql`
      query GetFoodItems {
        foodItems {
          id
          name
          quantity
        }
      }
    `

    const {loading, error, data } = useQuery(FOOD_ITEMS)

    if (loading) {
    	return <p>Loading...</p>
    }

    if (error) {
    	return <p>Error</p>
    }

 
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
	      <h1>Home</h1>
	      <FoodItem name={''} quantity={''} />
      </main>
      </div>
  );
}
