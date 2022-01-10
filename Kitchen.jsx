import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(){
    return(
        <div className="Kitchen">
            <Oven />
            <Sink />
            <h5>Kitchen</h5>
        </div>
    );
}

export default Kitchen;