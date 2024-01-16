import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls.tsx";
import {FieldValidatorType, maxLengthCreator, required} from "../../utils/validators.ts";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer.ts";
import React from "react";
import {Navigate} from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css"
import {
    CAPTCHA_PLACEHOLDER,
    EMAIL_PLACEHOLDER,
    LOGIN_BUTTON,
    PASSWORD_PLACEHOLDER,
    PROFILE_PATH
} from "../../data/constants.ts";
import {Button} from "antd";
import {AppStateType} from "../../redux/redux-toolkit-store";

const maxLength30: FieldValidatorType = maxLengthCreator(30);

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={Input}
                           placeholder={EMAIL_PLACEHOLDER}
                           name={"email"}
                           validate={[required, maxLength30]}
                    />
                </div>
                <div>
                    <Field component={Input}
                           placeholder={PASSWORD_PLACEHOLDER}
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
                           placeholder={CAPTCHA_PLACEHOLDER}
                           name={"captcha"}
                           validate={[required, maxLength30]}
                    />
                </div>}
                <div>
                    <Button type="primary" htmlType="submit">{LOGIN_BUTTON}</Button>
                </div>
            </form>
        )
    }

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm);

type MapStatePropsType = {
    captchaUrl: string | null,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    login: (email: string,
            password: string,
            rememberMe: boolean,
            captcha: string) => void
}

export type LoginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (isAuth)
        return <Navigate to={PROFILE_PATH}/>
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, {login})(Login);
