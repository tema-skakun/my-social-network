import style from "../ProfileInfo.module.css";
import Contact from "../Contact/Contact";

const ProfileDescription = ({profile, startEdit, isOwner}) => {
    return (
        <div className={style.description}>
            {isOwner && <div><button onClick={startEdit}>Edit</button></div>}
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills: </b>{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

export default ProfileDescription;