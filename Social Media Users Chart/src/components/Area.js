
const Area=(props)=>{
    return(
        <div className="app-area" style={{height:props.data.length*38}} >
            {props.children}
        </div>
    )
}
export default  Area