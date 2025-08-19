import Image from "next/image";
import styles from "./page.module.css";
import { gql } from '@apollo/client'
import { client  } from './main.tsx';

export default function Home() {
  client
  .query({
    query: gql`
      query GetFoodItems {
        foodItems {
          id
          name
          quantity
        }
      }
    `,
  })
  .then((result) => console.log(result));
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Home</h1>
      <p>hellooooooo</p>
      </main>
      </div>
  );
}
