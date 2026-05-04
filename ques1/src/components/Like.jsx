import { useState } from "react";

function Like(){

    const [intial ,setInitial] = useState(false)
    const [like ,setlike] = useState('🤍')

    function changeLike(){
        if (!intial) {
            setlike("🤍")
            setInitial(true)
            
        }
        if (intial) {
            setlike("❤️")
            setInitial(false)

        }
    }

    return(
        <>
        <button onClick={changeLike}>{like}</button>
        </>
    )
}
export default Like ; 