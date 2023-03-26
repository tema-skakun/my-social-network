import style from './Navbar.module.css'
// console.log(style);// print to console

const Navbar = () => {
	return (
		<nav className={style.nav}>
			<div className={style.item}>
				<a className={`${style.item} ${style.active}`} href='/profile'>
					Profile
				</a>
			</div>
			<div className={style.item}>
				<a href='/dialogs'>Messages</a>
			</div>
			<div className={style.item}>
				<a href='/news'>News</a>
			</div>
			<div className={style.item}>
				<a href='/music'>Music</a>
			</div>
			<div className={style.item}>
				<a href='/settings'>Settings</a>
			</div>
		</nav>
	)
}

export default Navbar;
