import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profileReducer";
import { useParams } from 'react-router-dom';

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
        {profile: state.profilePage.profile}
    )
}

let withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlProfileContainer);
