import loader from "../../../assets/images/loader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img src={loader} alt={'loading'}/>
        </div>
    )
}
export default Preloader;
