import style from "./Contact.module.css"

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}>
        {contactTitle}: {contactValue}
    </div>
}

export default Contact;