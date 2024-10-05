import { Dispatch,SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type TipPercentageForm ={
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
  }
export default function TipPercentageForm({setTip, tip}: TipPercentageForm) {
  return (
    <div>
      <h3 className="text-black font-black">Propina:</h3>
      <form>
        {tipOptions.map((tipOption)=>(
            <div className="flex gap-2" key={tipOption.id}>
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input 
                id={tipOption.id} 
                type="radio" 
                value={tipOption.value} 
                name="tip"
                onChange={e=> setTip(parseFloat(e.target.value))}
                checked={tipOption.value === tip}/>
            </div>
        )
            
        )}
        
      </form>
    </div>
  )
}
