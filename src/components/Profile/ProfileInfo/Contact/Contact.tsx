import style from "./Contact.module.css"
import {FC} from "react";

type PropsType = {
    contactTitle: string | null,
    contactValue: string | null,
}

const Contact: FC<PropsType> = ({contactTitle, contactValue}) => {
    if (contactValue) {
        return (
            <div className={style.contact}>
                <b>{contactTitle}: </b>{contactValue}
            </div>
        )
    }
}

export default Contact;
