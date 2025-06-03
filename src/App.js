import Header from "./components/header/Header";
import Fonts from "./components/base/Fonts";
import Meta from "./components/base/Meta";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Meta />
      <Fonts />
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
