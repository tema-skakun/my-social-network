import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import { useParams } from 'react-router-dom';
import {UsersAPI} from "../../api/api";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;
        UsersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return (
        {profile: state.profilePage.profile}
    )
}

let withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlProfileContainer);