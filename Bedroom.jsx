function Bedroom(props){
    return(
        <div className="Bedroom" id={"bed" + props.bedNum}>
            <h5>Bedroom {props.bedNum}</h5>
        </div>
    );
}

export default Bedroom;