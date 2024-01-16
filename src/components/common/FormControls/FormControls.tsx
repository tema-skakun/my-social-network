import style from "./FormControls.module.css"

// const FormControl = ({input, meta:{touched, error}, children, ...props}) => {
//     const hasError = touched && error;
//     return (
//         <div className={style.formControl + " " + (hasError ? style.error : "")}>
//             <div>
//                 <props.typefield {...input} {...props}/>
//             </div>
//             {hasError && <span>{error}</span>}
//         </div>
//     )
// }
//
// export const Textarea = (props) => {
//     return <FormControl typefield="textarea" {...props}/>
// }
// export const Input = (props) => {
//     return <FormControl typefield="input" {...props}/>
// }

const FormControl = ({input, meta:{touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
                {/*<props.typefield {...input} {...props}/>*/}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
