import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import React from "react";
import {Navigate} from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
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
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth)
        return <Navigate to={"/profile"}/>
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});
export default connect(mapStateToProps, {login})(Login);
