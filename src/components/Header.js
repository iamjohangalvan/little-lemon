import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="assets/Logo.svg" alt="logo" />
      </div>
      <div clasName="nav">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
