import Like from "./Like";

function Card(){
    return(
        <>
        <div style={{border:"1px solid black",width:"300px",height:"200px",marginTop:"50px",textAlign:"center"}}>
            <h1>Nisha Negi</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <Like />
        </div>
        
        </>
    )
}
export default Card ;