import {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators.ts";
import {Textarea} from "../../../common/FormControls/FormControls.tsx";
import {ADD_POST_BUTTON, POST_PLACEHOLDER} from "../../../../data/constants.ts";
import {Button} from "antd";
import {onFormSubmit} from "../../../../utils/formSubmitHandlers.ts";

type PropsType = {
    handleSubmit: any
    reset: any
    pristine: any
    onSubmit: (values: any) => void
}

const maxLength50 = maxLengthCreator(50);
const AddPostForm: FC<PropsType> = ({handleSubmit, reset, pristine, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit(onFormSubmit(reset, pristine, onSubmit))}>
            New post
            <Field
                component={Textarea}
                placeholder={POST_PLACEHOLDER}
                name={"newPostText"}
                validate={[required, maxLength50]}
            />
            <Button type="primary" htmlType="submit">
                {ADD_POST_BUTTON}
            </Button>
        </form>
    );
};

export const AddPostReduxForm = reduxForm({
    form: 'profileAddPostForm',
})(AddPostForm);
