import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotal ={
  order: OrderItem[],
  tip: number,
  placeOrder: ()=>void
}
export default function OrderTotal({order, tip, placeOrder}: OrderTotal) {
  const subTotal = useMemo(()=> order.reduce((total, item)=> total+(item.cantidad*item.price),0), [order])
  const propina = useMemo(()=> subTotal*tip,[subTotal, tip])
  const total = useMemo(()=> subTotal+propina,[subTotal, propina])
  return (
    <>
      <div className="space-y-2">
        <h2 className="font-black text-2xl">Total y Propina:</h2>
        <p>Subtotal:{' '}
          <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>
        <p>Propina:{' '}
          <span className="font-bold">{formatCurrency(propina)}</span>
        </p>
        <p>Total a Pagar:{' '}
          <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white m-10 disabled:opacity-10" 
      disabled={total===0}
      onClick={()=>placeOrder()}
      >Guardar Orden</button>
    </>)
}
