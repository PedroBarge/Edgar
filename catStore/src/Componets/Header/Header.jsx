import IconHome from "/src/assets/img/logo.png";

const Header = () => {
  return (
    <>
      <nav className="navMain">
        <img className="iconHome" src={IconHome} alt="Unique Logo" />
        <h1>Unique Cats Store</h1>
      </nav>
      <h3 className="slogan">“Enhancing the Journey with Your Pet”</h3>
    </>
  );
};

export default Header;
