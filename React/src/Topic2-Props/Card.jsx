const Card = (props) => {
  console.log(props);

  // object destructuring
  const { fullname, age, team } = props;
  return (
    <div>
      <h2>FullName:{fullname}</h2>
      <h2>Age:{age}</h2>
      <h2>Team:{team}</h2>
    </div>
  );
};

export default Card;
