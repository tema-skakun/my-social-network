import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={style.descriptionBlock}>
            <img
                src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg'
                alt='profile background'
			/>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
