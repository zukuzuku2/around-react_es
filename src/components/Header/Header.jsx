function Header(props) {
  return (
    <header className="header">
      <img src={props.image} alt="Banner Header" className="header__pic" />
    </header>
  );
}

export default Header;
