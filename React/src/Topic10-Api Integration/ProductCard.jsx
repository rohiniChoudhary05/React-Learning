import "./productCard.css"

const ProductCard = (props) => {

    const {title , price , category , images} = props.elm ;
  return (
    <div className="card">
        <div className="profile">
            <img src={images[0]} alt="" />
        </div>
        <div className="info">
            <div>{title}</div>
            <div>{category}</div>
            {price}
        </div>
    </div>
  )
}

export default ProductCard