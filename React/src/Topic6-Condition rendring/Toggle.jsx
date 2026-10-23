import { useState } from "react"
import Dashboard from "./Dashboard"
import Login from "./Login"

const Toggle = () => {
    const [isLogin, setIsLogin] = useState(false)
    const handleClick = ()=>{
        setIsLogin(!isLogin)
    }
  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
      {isLogin ? <Dashboard/> : <Login/>}
    </div>
  )
}

export default Toggle
