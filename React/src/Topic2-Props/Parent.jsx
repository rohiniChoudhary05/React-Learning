import Card from "./Card";

const Parent = () => {
  const fullname = "Virat Kohli";
  const age = 38;
  const team = "India";
  return (
    <div>
      <Card fullname={fullname} age={age} team={team} />
    </div>
  );
};

export default Parent;
