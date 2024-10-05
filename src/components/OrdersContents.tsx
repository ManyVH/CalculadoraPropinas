import { formatCurrency } from '../helpers';
import { MenuItem, OrderItem } from '../types/index';


type OrdersContentsProps={
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrdersContents({order, removeItem}: OrdersContentsProps) {
  return (
    <div>
      <div className='space-y-3 mt-10 '>
        {(order.map(item =>(
            <div key={item.id} className='flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b'>
                <div>
                <p>
                    {item.name} - {formatCurrency(item.cantidad)}
                </p>
                <p className='font-black'>
                  Cantidad: {item.cantidad} - {formatCurrency(item.cantidad * item.price)}
                </p>
                </div>
                <button className='bg-red-600 h-8 rounded-full w-8 text-white font-black'
                onClick={()=> removeItem(item.id)}>
                  X
                </button>
            </div>
        )))}
      </div>
    </div>
  )
}
