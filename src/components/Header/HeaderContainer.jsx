import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import React from "react";

class HeaderContainer extends React.Component {
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
export default connect(mapStateToProps, {logout}) (HeaderContainer);
