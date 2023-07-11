import style from './Header.module.css'


const Header = () => {
  return (
    <header className={style.header}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU'
           alt={'frederico'}
      />
    </header>
  )
}

export default Header;
