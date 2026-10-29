
const Skeleton = () => {
  return (
    <div className="skeleton_container">
      {
        Array.from({length:30}).map((_, i) =>{
            <div key={i} className="skeleton_card"></div>
        })
      }
    </div>
  )
}

export default Skeleton ;



// page nation  search in youtube and create a web site 

//  react dev tool ins

// ifelse and finally 