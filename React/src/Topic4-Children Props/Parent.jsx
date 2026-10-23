//(rafce) :-  react arrow function component export 
// React.Fragment
//  ham ne closing and opeing me andar likha hai to props me jaye gha
// props.children 





// import React from 'react'
// import Card from './Card'

// const Parent = () => {
//   return (
//     <div>
//       <Card>
//         <h2>hello</h2>
//         <h3>developer</h3>
//       </Card>
//     </div>
//   )
// }

// export default Parent

// Props are immutable  and default props in React 

import React from 'react'
import Card from './Card'

const Parent = () => {
  return (
    <div>
      <Card fullname={"rohini"}  age ={21} team={"RCB"}/>
    </div>
  )
}

export default Parent
