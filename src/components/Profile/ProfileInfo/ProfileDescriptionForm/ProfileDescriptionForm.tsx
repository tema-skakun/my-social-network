import {FC} from "react";
import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import style from "../Contact/Contact.module.css"//причесать
import styleForm from "../../../common/FormControls/FormControls.module.css" //причесать
import styleInfo from "../ProfileInfo.module.css"; //причесать - оставить один
import {
    ABOUT_ME_PLACEHOLDER,
    ABOUT_ME_TITLE,
    CONTACTS_TITLE,
    LOOKING_JOB_TITLE, NAME_PLACEHOLDER,
    NAME_TITLE, PROFESSION_SKILLS_PLACEHOLDER,
    PROFESSION_SKILLS_TITLE,
    SAVE_BUTTON
} from "../../../../data/constants.ts";
import {Button} from "antd";
import {ContactsType} from "../../../../types/types";

type PropsType = {
    contacts: ContactsType
    error?: any
    onSubmit: (formData: any) => void;
    handleSubmit?: (formData: any) => void
}

const maxLength30 = maxLengthCreator(30);

const ProfileDescriptionForm: FC<PropsType> = ({handleSubmit, contacts, error}) => {
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
                <b>{CONTACTS_TITLE}</b> {Object.keys(contacts).map(key => {
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
export const ProfileDescriptionReduxForm: any = reduxForm({
    form: 'edit-profile'
})(ProfileDescriptionForm);
