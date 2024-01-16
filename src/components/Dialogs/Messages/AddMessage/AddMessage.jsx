import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators.ts";
import {Textarea} from "../../../common/FormControls/FormControls.tsx";
import {MESSAGE_PLACEHOLDER, SEND_MESSAGE_BUTTON} from "../../../../data/constants.ts";
import {Button} from "antd";
import {onFormSubmit} from "../../../../utils/formSubmitHandlers.ts";

const maxLength30 = maxLengthCreator(30);

const AddMessageForm = ({handleSubmit, reset, pristine, onSubmit}) => {
    return (
        <form onSubmit={handleSubmit(onFormSubmit(reset, pristine, onSubmit))}>
            <div>
                <Field component={Textarea}
                       placeholder={MESSAGE_PLACEHOLDER}
                       name={"newMessageBody"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Button type="primary" htmlType="submit" >{SEND_MESSAGE_BUTTON}</Button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
