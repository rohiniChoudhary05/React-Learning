import { useEffect, useState } from "react"
import Skeleton from "./skeleton"
import ProductCard from "./ProductCard"


const Home = () => {
    const [products, setProducts] = useState([])
    //  console.log("This is Product",products);
  
    useEffect(() =>{
        const getProduct = async () =>{
            const response = await fetch("https://dummyjson.com/products")
            // console.log("This is Response ",response);
            
            const data =  await response.json()
            // console.log("This is Data",data);
            setProducts(data.products)
            // console.log(data.products.title);
            
            
        }
        getProduct()
    } , [])
    // console.log("Product" , products);
    
  return (products.length === 0) ? <Skeleton/> :(
    <div className="container">
        {
            products.map((element) =>{ 
             return  <ProductCard key={element.id} element= {element} />
            })
        }
    </div>
  )
}

export default Home
