import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {
            profile: state.profilePage.profile,
            // isAuth: state.auth.isAuth,
        }
    )
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);//HOC to check auth

let withUrlProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(withUrlProfileContainer);
