import style from "../ProfileInfo.module.css";
import Contact from "../Contact/Contact";

const ProfileDescription = ({profile}) => {
    return (
        <div className={style.description}>
            <div>
                <b>Full name: </b>{profile.fullName}
            </div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skils: </b>{profile.lookingForAJobDescription}
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
