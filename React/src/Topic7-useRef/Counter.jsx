import { useRef } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log("Counter Component");
  //   console.log(countRef.current);
  const handleClick = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <div className="container">
        <h1>state Counter</h1>
        <h3>Count:{count}</h3>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div className="container">
        <h2>Ref Counter</h2>
        {/* <h3>CountRef:{countRef?.current}</h3>   */}   //!  command se htn hai jab bhi use krn hai tab
        <button onClick={handleClick}>Add</button>
      </div>
      
    </div>
  );
};

export default Counter;

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);
//   const outputRef = useRef(null);

//   const handleClick = () => {
//     outputRef.current.innerText =
//       inputRef.current.value;
//   };

//   return (
//     <div>
//       <input ref={inputRef} placeholder="Search here" />

//       <h2 ref={outputRef}>Query: </h2>

//       <button onClick={handleClick}>Search</button>
//     </div>
//   );
// }

// export default App;

// !  skeleton ui  search in youtube and build this 
