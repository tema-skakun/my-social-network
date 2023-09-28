import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import React from "react";
import {Navigate} from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Input}
                       placeholder={"Email"}
                       name={"email"}
                       validate={[required, maxLength30]}
                />
            </div>
            <div>
                <Field component={Input}
                       placeholder={"Password"}
                       name={"password"}
                       validate={[required, maxLength30]}
                       type={"password"}
                />
            </div>
            <div>
                <Field component={"input"}
                       type={"checkbox"}
                       name={"rememberMe"}
                />remember me
            </div>
            {error &&
                <div className={style.formSummaryError}>
                    {error}
                </div>}
            {captchaUrl && <img src={captchaUrl} alt={'captchaUrl'}/>}
            {captchaUrl && <div>
                <Field component={Input}
                       placeholder={"Symbols from image"}
                       name={"captcha"}
                       validate={[required, maxLength30]}
                />
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (isAuth)
        return <Navigate to={"/profile"}/>
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, {login})(Login);
