import { Item } from "./components/Item"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrdersContents from './components/OrdersContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from "./components/TipPercentageForm";


function App() {
  const { order,tip,setTip,addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl text-white font-black">Calculadora de Propinas</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
          {menuItems.map(item =>
            
            <Item 
            key={item.id}
            item={item}
            addItem={addItem}
            
            ></Item>
          )}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        <h2 className="text-4xl font-black">Consumo</h2>
          {order.length >0 ? 
          <>
          <OrdersContents
          order={order}
          removeItem={removeItem}/>
          <TipPercentageForm
          setTip={setTip}
          tip={tip}
          />
          <OrderTotal
          order={order}
          tip={tip}
          placeOrder={placeOrder}/>
          </>
          :<p className='text-center'>La orden esta vacía</p> }
        </div>
      </main>
    </>
  )
}

export default App
