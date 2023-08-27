import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);
const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            New post
            <Field component={Textarea}
                   placeholder={"enter your post text..."}
                   name={"newPostText"}
                   validate={[required, maxLength10]}
            />
            <button>add post</button>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);
