import { useContext , createContext } from "react";
function Child1(){
    const mycontext = createContext();
  const { user, setUser } = useContext(mycontext);
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