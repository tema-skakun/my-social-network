import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import style from "../Contact/Contact.module.css"
import styleForm from "../../../common/FormControls/FormControls.module.css"
import styleInfo from "../ProfileInfo.module.css";


const maxLength30 = maxLengthCreator(30);

const ProfileDescriptionForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={styleInfo.description}>
            <div>
                <button>Save</button>
            </div>
            {error &&
                <div className={styleForm.formSummaryError}>
                    {error}
                </div>}
            <div>
                <b>Full name: </b>
                <Field component={Input}
                       placeholder={"Full name"}
                       name={"fullName"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <b>Looking for a job: </b>
                <div>
                    <Field component={"input"}
                           type={"checkbox"}
                           name={"lookingForAJob"}
                    />Looking for a job
                </div>
            </div>
                <div>
                    <b>My professional skills: </b>
                    <Field component={Textarea}
                           placeholder={"My professional skills"}
                           name={"lookingForAJobDescription"}
                           validate={[required, maxLength30]}
                    />
                </div>
            <div>
                <b>About me: </b>
                <Field component={Textarea}
                       placeholder={"About me"}
                       name={"aboutMe"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div className={style.contact} key={key}>
                    <b>{key}: </b><Field component={Input}
                                     placeholder={key}
                                     name={"contacts." + key}
                                     validate={[required, maxLength30]}
                    />
                    </div>
            })}
            </div>
        </form>
    )
}

const ProfileDescriptionReduxForm = reduxForm({form: 'edit-profile'})(ProfileDescriptionForm);

export default ProfileDescriptionReduxForm;
