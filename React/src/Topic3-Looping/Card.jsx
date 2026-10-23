import "./card.css"
const Card = (props) => {
console.log(props);

const {fullname , age, team , image} = props. players
    
  return (
    <div className="card">
        <div className="profile">
            <img src={image} alt="" />
        </div>
          <div className="info">
          <div>Fullname: {fullname}</div>
          <div>Age: {age}</div>
          <div>Team: {team}</div>
      </div>
    </div>
  )
}

export default Card