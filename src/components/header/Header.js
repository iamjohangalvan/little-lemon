import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <div className="main-container ">
        <div className="flex between align-center ">
          <div className="logo">
            <img src="assets/Logo.svg" alt="logo" />
          </div>

          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
