
const Child = () => {

    const fullName = "Rohini Choudhary";
    const age = 38;
    const isLogin = true;
  return (
    <div>
        <h2>FullName:{fullName}</h2>
        <h2>Age: {age}</h2>
        {
            isLogin ? <h3>Welcome {fullName}</h3> :<h3>{fullName} Please Login</h3>
        }
    </div>
  )
}

export default Child