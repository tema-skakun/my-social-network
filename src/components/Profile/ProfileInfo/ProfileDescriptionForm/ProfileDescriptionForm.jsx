// import Contact from "../Contact/Contact";

import {Input, Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";

const maxLength30 = maxLengthCreator(30);

const ProfileDescriptionForm = ({handleSubmit, profile}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
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
                <b>About me: </b>{profile.aboutMe}
                <Field component={Textarea}
                       placeholder={"About me"}
                       name={"aboutMe"}
                       validate={[required, maxLength30]}
                />
            </div>
            {/*<div>*/}
            {/*    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact*/}
            {/*        key={key}*/}
            {/*        contactTitle={key}*/}
            {/*        contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDescriptionReduxForm = reduxForm({form: 'edit-profile'})(ProfileDescriptionForm);

export default ProfileDescriptionReduxForm;
