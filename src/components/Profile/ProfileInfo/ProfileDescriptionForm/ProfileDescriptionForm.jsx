import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import style from "../Contact/Contact.module.css"
import styleForm from "../../../common/FormControls/FormControls.module.css"
import styleInfo from "../ProfileInfo.module.css";
import {
    ABOUT_ME_PLACEHOLDER,
    ABOUT_ME_TITLE,
    CONTACTS_TITLE,
    LOOKING_JOB_TITLE, NAME_PLACEHOLDER,
    NAME_TITLE, PROFESSION_SKILLS_PLACEHOLDER,
    PROFESSION_SKILLS_TITLE,
    SAVE_BUTTON
} from "../../../../data/constants";
import {Button} from "antd";


const maxLength30 = maxLengthCreator(30);

const ProfileDescriptionForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={styleInfo.description}>
            <div>
                <Button type="primary" htmlType="submit">{SAVE_BUTTON}</Button>
            </div>
            {error &&
                <div className={styleForm.formSummaryError}>
                    {error}
                </div>}
            <div>
                <b>{NAME_TITLE}</b>
                <Field component={Input}
                       placeholder={NAME_PLACEHOLDER}
                       name={"fullName"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <b>{LOOKING_JOB_TITLE}</b>
                <div>
                    <Field component={"input"}
                           type={"checkbox"}
                           name={"lookingForAJob"}
                    />Looking for a job
                </div>
            </div>
                <div>
                    <b>{PROFESSION_SKILLS_TITLE}</b>
                    <Field component={Textarea}
                           placeholder={PROFESSION_SKILLS_PLACEHOLDER}
                           name={"lookingForAJobDescription"}
                           validate={[required, maxLength30]}
                    />
                </div>
            <div>
                <b>{ABOUT_ME_TITLE}</b>
                <Field component={Textarea}
                       placeholder={ABOUT_ME_PLACEHOLDER}
                       name={"aboutMe"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <b>{CONTACTS_TITLE}</b> {Object.keys(profile.contacts).map(key => {
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
