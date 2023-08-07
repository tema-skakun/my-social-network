import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import React from "react";
import {UsersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        UsersAPI.getLogin()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
            avatar: state.auth.avatar,
        }
    )
}
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);
