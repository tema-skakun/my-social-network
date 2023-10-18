import loader from "../../../assets/images/loader.svg";
import {LOADING_TITLE} from "../../../data/constants.ts";

let Preloader = () => {
    return (
        <div>
            <img src={loader} alt={LOADING_TITLE}/>
        </div>
    )
}
export default Preloader;
