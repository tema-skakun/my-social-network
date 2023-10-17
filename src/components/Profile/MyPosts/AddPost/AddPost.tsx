import {FC} from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormControls";
import {ADD_POST_BUTTON, POST_PLACEHOLDER} from "../../../../data/constants";
import {Button} from "antd";
import {onFormSubmit} from "../../../../utils/formSubmitHandlers";

type PropsType = {
    handleSubmit: any
    reset: any
    pristine: any
    onSubmit: any
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
