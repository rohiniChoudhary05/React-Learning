import { useState } from "react"

const Counter = () => {
    const [Counter, setCounter] = useState(0)
   // React state variable

   const handleIncrease = ()=>{
     setCounter(Counter+1)
   }

   const handleDecrease =()=>{
    setCounter(Counter - 1)
   }
   console.log("Counter Component");
   
  return (
    <div>
      <h2>Count :{Counter}</h2>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default Counter ;


// {useState}
// and react aise kyu likhte hain