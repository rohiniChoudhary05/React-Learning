import { useEffect, useState } from "react"
import "./counter.css"
const Counter = () => {
    const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log("i am mounting UseEffect")
    //     return  () => console.log("Cleanup Function Unmounting UseEffect");
        
    // } , [])
     useEffect(() => {
        console.log(" UseEffect")
        
        
    } , [])

    console.log("Counter Comp......");  // phl chl gh 
    
  return (
    <div className="count">
        <h1>Counter Component</h1>
        <h2>count :{count}</h2>
        <button onClick={() => setCount(count+1)}>Add</button>
    </div>
  )
}

export default Counter ;