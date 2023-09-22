import style from "./FormControls.module.css"

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <props.typefield {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl typefield="textarea" {...props}/>
}
export const Input = (props) => {
    return <FormControl typefield="input" {...props}/>
}