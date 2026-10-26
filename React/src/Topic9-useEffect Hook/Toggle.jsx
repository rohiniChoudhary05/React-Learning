import { useState } from "react"
import Counter from "./Counter"

const Toggle = () => {
  const [show, setShow] = useState(false)

  const handleClick = () =>{
    setShow(!show)
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        show && <Counter/>
      }
    </div>
  )
}

export default Toggle



// ky useEffect kuch return krt hai ky

// what is life cycle in react  all details explain /