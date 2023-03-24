import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

const Profile = () => {
	return (
		<div className={style.content}>
			<div>
				<img src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg' />
			</div>
			<div>
				ava + description
			</div>
			<textarea></textarea>
			<button>Search</button>
			<MyPosts />
		</div>
	)
}

export default Profile;
