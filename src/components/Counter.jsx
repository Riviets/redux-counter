import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementBy, decrementBy, clear } from "../state/counter/counterSlice"
import { useState } from "react"

export default function Counter(){

    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const initialInputValues = {
        incrementBy: 0,
        decrementBy: 0
    }
    const [inputValues, setInputValues] = useState({initialInputValues})

    function handleChange(event){
        const {name, value} = event.target
        setInputValues({...inputValues, [name]: value})
    }

    function handleClear(){
        dispatch(clear())
        setInputValues(initialInputValues)
    }

    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="flex flex-col items-center gap-5 bg-white p-8 border-2 shadow-md rounded-md border-gray-600">
                <p className="font-bold text-5xl">{value}</p>
                <div className="flex justify-around w-full border-2 rounded-md">
                    <button onClick={()=>{dispatch(increment())}} className="text-2xl font-bold text-white border-r-2 border-black flex-1 bg-green-500 rounded-l-sm">+</button>
                    <button onClick={()=>{dispatch(decrement())}} className="text-2xl font-bold text-white flex-1 bg-red-500 rounded-r-sm">-</button>
                </div>
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex gap-4 items-end">
                       <div className="flex flex-col gap-1">
                            <label htmlFor="incrementBy" className="font-bold text-xl tracking-wider">Increment By</label>
                            <input type="number" id="incrementBy" name="incrementBy" value={inputValues?.incrementBy} onChange={handleChange} className="border-2 rounded-md px-3 py-1 text-xl max-w-[250px]"/>
                       </div>
                        <button onClick={()=>{dispatch(incrementBy(Number(inputValues.incrementBy)))}} className="bg-gray-600 text-white font-bold text-xl py-1 px-4 rounded-md border-2 border-gray-700">OK</button>
                    </div>
                    <div className="flex gap-4 items-end">
                       <div className="flex flex-col gap-1">
                            <label htmlFor="incrementBy" className="font-bold text-xl tracking-wider">Decrement By</label>
                            <input type="number" id="incrementBy" name="incrementBy" value={inputValues?.decrementBy} onChange={handleChange} className="border-2 rounded-md px-3 py-1 text-xl max-w-[250px]"/>
                       </div>
                        <button onClick={()=>{dispatch(incrementBy(Number(inputValues.decrementBy)))}} className="bg-gray-600 text-white font-bold text-xl py-1 px-4 rounded-md border-2 border-gray-700">OK</button>
                    </div>
                </div>
                <button onClick={handleClear} className="text-white bg-gray-600 w-full rounded-md text-2xl py-1 border-2 border-gray-700">
                    Clear
                </button>
            </div>
        </div>
    )
}