import "./productCard.css"

const ProductCard = (props) => {
    console.log(props);
    console.log(props.element);
    
    
    const {title , price , category , images} = props.element ;
    
  return (
    <div className="card">
        <div className="profile">
            <img src={images[0]} alt="" />
        </div>
        <div className="info">
            <div>{title}</div>
            <div>{category}</div>
             <div>{price}</div>
        </div>
    </div>
  )
}

export default ProductCard ;