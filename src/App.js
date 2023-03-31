import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import headerImage from "./images/header.svg";
import PopupWithForm from "./components/PopupWithForm/PopupWithForm";
import btnClose from "./images/closeIcon.svg";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { useEffect } from "react";
import { api } from "./utils/api";
import { EditProfilePopup } from "./components/EditProfilePopup/EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleEditAvatarClick(evt) {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(evt) {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(evt) {
    setIsAddPlacePopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api.updateUserInfo({ name, about }).then((data) => {
      setCurrentUser(data);
    });
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header image={headerImage} />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name={`add-card`}
          title={`Nuevo Lugar`}
        >
          <form className="form" noValidate>
            <img
              src={btnClose}
              alt="Boton para cerrar el modal o popup"
              className="form__close"
              onClick={closeAllPopups}
            />
            <h5 className="form__title">Nuevo lugar</h5>
            <div className="form__user-info">
              <input
                type="text"
                placeholder="Título"
                className="form__input"
                id="form-title"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="form-title-error form__input-error">
                Este campo es obligatorio
              </span>
              <input
                type="url"
                placeholder="Enlace a la imagen"
                className="form__input"
                id="form-link"
                required
              />
              <span className="form-link-error form__input-error">
                Este campo es obligatorio
              </span>
            </div>
            <button className="form__submit form-add-card" type="submit">
              <p className="form__submit-text form__submit-createText">Crear</p>
            </button>
          </form>
        </PopupWithForm>
        <PopupWithForm
          name={`edit-profile`}
          title={`Cambiar foto de perfil`}
          isOpen={isEditAvatarPopupOpen}
        >
          <form className="form" noValidate>
            <img
              src={btnClose}
              alt="Boton para cerrar el modal o popup"
              className="form__close"
              onClick={closeAllPopups}
            />
            <h5 className="form__title">Cambiar foto de perfil</h5>
            <div className="form__user-info">
              <input
                type="url"
                placeholder="Inserte url de imagen"
                className="form__input"
                id="form-name"
                minLength="2"
                maxLength="80"
                required
              />
              <span className="form-name-error form__input-error">
                Este campo es obligatorio
              </span>
            </div>
            <button className="form__submit form__edit-profile" type="submit">
              <p className="form__submit-text">Guardar</p>
            </button>
          </form>
        </PopupWithForm>
        <ImagePopup
          isOpen={!!selectedCard._id}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
