import Card from "./Card";

const Container = () => {
    const players = [
    {
      fullname: "Virat kohli",
      age: 38,
      team: "India",
      image: "https://c.ndtvimg.com/2026-06/cre1337o_anushka-_625x300_01_June_26.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738"
    },

    {
      fullname: "Rohit Sharma",
      age: 39,
      team: "India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gNr_-opN2HvOnE4B6aw7w6khOii0yBF7DEGGpKBZx5E9Y3qUTHmSBzTl&s=10"
    },

    {
      fullname: "MS Dhoni",
      age: 44,
      team: "India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLGL42YANy5ryPBshkUdVKSEU8PtSp3HJ-N8V0cD58A&s"
    },

    {
      fullname: "KL Rahul",
      age: 32,
      team: "India",
      image: "https://ddindia.co.in/wp-content/uploads/2025/04/RCB_VS_DC_0137.jpg"
    }
  ];
  return (
    <div className="container">
      {
        players.map((element , index) => <Card  key={index}  players={element}/>
        )
      }
    </div>
  )
}

export default Container;
