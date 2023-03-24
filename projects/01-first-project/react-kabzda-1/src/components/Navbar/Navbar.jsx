import style from './Navbar.module.css'
// console.log(style);// print to console

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.item}>
				<a className={`${style.item} ${style.active}`}>
					Profile
				</a>
			</div>
			<div className={style.item}>
				<a>Messages</a>
			</div>
			<div className={style.item}>
				<a>News</a>
			</div>
			<div className={style.item}>
				<a>Music</a>
			</div>
			<div className={style.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar;
