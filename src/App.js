import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import headerImage from "./images/header.svg";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";
function App() {
  return (
    <div className="page">
      <Header image={headerImage} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
