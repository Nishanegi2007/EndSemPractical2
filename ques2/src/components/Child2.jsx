import { useContext } from "react";
import { MyContext } from "../context/MyContext";
function Child2(){

  const { user, setUser } = useContext(MyContext);
  return(
    
    <>
    <div>Child2</div>
    
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
      Increase Age
      </button>
    </>
  )
}
export default Child2 ;