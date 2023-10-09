import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormControls";
import {MESSAGE_PLACEHOLDER, SEND_MESSAGE_BUTTON} from "../../../../data/constants";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder={MESSAGE_PLACEHOLDER}
                       name={"newMessageBody"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>{SEND_MESSAGE_BUTTON}</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
