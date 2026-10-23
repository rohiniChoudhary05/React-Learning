// import React from 'react'

// const Card = (props) => {
//     console.log("Props" , props);
    
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

// export default Card


import React from 'react'

const Card = ({fullname , age , team}) => {

  return (
    <div>
      <h1>fullname</h1>
      <h2>age</h2>
      <h2>team </h2>
    </div>
  )
}

export default Card
