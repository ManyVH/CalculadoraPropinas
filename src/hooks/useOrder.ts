import { useState } from "react"
import { MenuItem, OrderItem } from "../types"



export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)
  
  const addItem = (item: MenuItem)=>{
    const existeItem = order.findIndex(orderItem => orderItem.id === item.id)

    if (existeItem != -1) {
      const updateOrder = [...order]
      updateOrder[existeItem].cantidad++
      setOrder(updateOrder)
    }else{
      const newItem = {...item, cantidad:1}
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItem['id'])=>{
      setOrder(order.filter(item => item.id !==id))
  }
  const placeOrder = ()=>{
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}
