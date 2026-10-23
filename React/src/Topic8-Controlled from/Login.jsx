import { useRef, useState } from "react"

const Login = () => {
  const searchTextRef = useRef() 
  const [Query, setQuery] = useState('')
//   searchTextRef {current = null} save aisee me  // !(current me  input save ho jaye gha) 
const handleClick =()=>{
    console.log(searchTextRef.current.value);  
    setQuery(searchTextRef.current.value)
}
console.log("Login Components");

  return (
    <div>
       <input type="text" ref={searchTextRef} placeholder="Search Here....." />
       <h1>Query:{Query}</h1>
       <button onClick={handleClick}>Search</button>
       
    </div>
  )
}

export default Login

// useRef  Object bana hai usa ke object me hamri current string save
// ho jaye gha  or fir vo variable me save ho jaye gha

// ! Ref in input me kyu likhte hai

// Input bhi ek object  hai

// what is different between controlled and unControlled 




// ! Different Between useState and useRef

// used to manage state that affects the ui(reactive state)
//  used to store mutable value that persist across renders

// ! Re-rendering
// updating state causes the component



// Code	Meaning
// searchTextRef :-	Ref object
// searchTextRef.current :-	Input element
// searchTextRef.current.value:-	Input mein likha hua text
// useState	 :- UI ko update karne ke liye