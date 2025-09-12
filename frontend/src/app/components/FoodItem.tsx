"use client"

import { React } from "react"

interface FootItem {
  name: string
  quantity: number
}

export const FoodItem: React.FC<FoodItem> = ({ name, quantity }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>quantity: {quantity}</p>
    </div>
  )
}
