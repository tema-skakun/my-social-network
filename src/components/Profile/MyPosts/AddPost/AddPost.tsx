import {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators.ts";
import {Textarea} from "../../../common/FormControls/FormControls.tsx";
import {ADD_POST_BUTTON, POST_PLACEHOLDER} from "../../../../data/constants.ts";
import {Button} from "antd";
import {onFormSubmit} from "../../../../utils/formSubmitHandlers.ts";
import style from "./AddPost.module.css"

type PropsType = {
    handleSubmit: any
    reset: any
    pristine: any
    onSubmit: (values: any) => void
}

const maxLength50 = maxLengthCreator(50);
const AddPostForm: FC<PropsType> = ({handleSubmit, reset, pristine, onSubmit}) => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                New post
            </div>
            <form onSubmit={handleSubmit(onFormSubmit(reset, pristine, onSubmit))} className={style.form}>
                <div className={style.textarea}>
                    <Field
                        component={Textarea}
                        placeholder={POST_PLACEHOLDER}
                        name={"newPostText"}
                        validate={[required, maxLength50]}
                        style={{ width: '100%' }}
                    />
                </div>
                <div className={style.button}>
                    <Button type="primary" htmlType="submit">
                        {ADD_POST_BUTTON}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export const AddPostReduxForm = reduxForm({
    form: 'profileAddPostForm',
})(AddPostForm);
