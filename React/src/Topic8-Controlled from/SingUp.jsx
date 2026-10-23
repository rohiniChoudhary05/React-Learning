import { useState } from "react"

const SingUp = () => {
    const [searchText, setSearchText] = useState("")
  return (
    <div>
      <input  value={searchText} onChange={(e) =>setSearchText(e.target.value)} type="text" placeholder="Search Here....." />
      <h1>Query:-{searchText}</h1>
    </div>
  )
}

export default SingUp   // More Controlled way 

// ! Dev Tool download