import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder={"enter your message..."}
                       name={"newMessageBody"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
