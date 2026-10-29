// import { useEffect, useState } from "react"
// import Skeleton from "./skeleton"
// import ProductCard from "./ProductCard"


// const Home = () => {
//     const [products, setProducts] = useState([])
//     //  console.log("This is Product",products);
  
//     useEffect(() =>{
//         const getProduct = async () =>{
//             const response = await fetch("https://dummyjson.com/products")
//             // console.log("This is Response ",response);
            
//             const data =  await response.json()
//             // console.log("This is Data",data);
//             setProducts(data.products)
//             // console.log(data.products.title);
            
            
//         }
//         getProduct()
//     } , [])
//     // console.log("Product" , products);
    
//   return (products.length === 0) ? <Skeleton/> :(
//     <div className="container">
//         {
//             products.map((element) =>{ 
//              return  <ProductCard key={element.id} element= {element} />
//             })
//         }
//     </div>
//   )
// }

// export default Home


import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "./ProductCard"
import Skeleton from "./skeleton"

const Home = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        // ! APi Calling
        let getProduct = async ()=>{
           try {
             let {data , status} = await axios.get("https://dummyjson.com/products")
            if(status >= 200 && status < 300){
                setProducts(data.products)
                console.log(data.products);
                
            }
           } catch (error) {
            if(error.code == "ERR_BAD_REQUEST"){
                setError(error.message)
            } 
           }
            finally{
                setLoading(false)
            }
            
        }

        getProduct()
    } , [])
    if(loading) return <Skeleton/>
    if(error) return <h1>{error}</h1>
  return (
    <div className="container">
        {
            products.map((element) =>{
                return <ProductCard key={element.id} element = {element}/>
            })
        }
    </div>
  )
}

export default Home