import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import {MyContext} from "./context/MyContext";
import { useState } from "react";
function App(){
  const [user, setUser] = useState({ name: "Nisha", age: 20 });

  return(
    <>
  
    <MyContext.Provider value={{ user, setUser }}>
      <Child1 />
      <Child2 />

    </MyContext.Provider>
    </>
  )
}
export default App ;