import { useContext } from "react";
import { MyContext } from "../context/MyContext";
function Child1(){

  const { user } = useContext(MyContext);
  return(
    
    <>
    <div>Child1</div>
    <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      
    </>
  )
}
export default Child1 ;