import { useContext } from "react";
import { MyContext } from "../context/MyContext";
function Child1(){

  const { user, setUser } = useContext(MyContext);
  return(
    
    <>
    <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
      Increase Age
      </button>
    </>
  )
}
export default Child1 ;