import React from "react";
import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            New post
            <Field component={"textarea"} placeholder={"enter your post text..."} name={"newPostText"}/>
            <button>add post</button>
        </form>
    )
}

export const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);
