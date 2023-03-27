import style from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div>
                    <NavLink
                        className={style.dialog + ' ' + style.active}
                        to='/dialogs/1'
                    >
                        Linus
                    </NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>Artem</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>Boris</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'>Paul</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/5'>Evgeniy</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/6'>Anton</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/7'>Pablo</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Yo =)</div>
            </div>
        </div>
    )
}

export default Dialogs;
