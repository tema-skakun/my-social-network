import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormControls";
import {ADD_POST_BUTTON, POST_PLACEHOLDER} from "../../../../data/constants";

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            New post
            <Field component={Textarea}
                   placeholder={POST_PLACEHOLDER}
                   name={"newPostText"}
                   validate={[required, maxLength10]}
            />
            <button>{ADD_POST_BUTTON}</button>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);
