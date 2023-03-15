import React from "react";
import editButton from "../../images/change_image_profile.png";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
function Main(props) {
  return (
    <>
      <main className="content">
        <div className="popup popup_image">
          <article className="popup__container">
            <img
              alt="Boton para cerrar el modal o popup"
              className="popup__close"
            />
            <img
              alt="imagen de un lugar de estados unidos"
              className="popup__image"
            />
            <h4 className="popup__text"></h4>
          </article>
          <div className="overlay"></div>
        </div>
        <div className="popup popup_delete">
          <form className="form form-delete" noValidate>
            <img
              alt="Boton para cerrar el modal o popup"
              className="form__close"
            />
            <h5 className="form__title form-delete-text">¿Estás seguro?</h5>
            <button className="form__submit form-profile" type="submit">
              <p className="form__submit-text">Si</p>
            </button>
          </form>
          <div className="overlay"></div>
        </div>
        {/* <div
          className={`popup popup_edit-profile ${
            openPopupEditProfileImage ? "show" : ""
          }`}
        >
          <form className="form" noValidate>
            <img
              alt="Boton para cerrar el modal o popup"
              className="form__close"
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
          <div className="overlay"></div>
        </div> */}
        <section className="profile" id="profile">
          <img
            alt="Imagen de perfil de usuario"
            className="profile__image"
            id="profile__image"
            onClick={props.onEditAvatarClick}
          />
          <div className="profile__info">
            <div className="profile__edit-container">
              <h2 className="profile__name" id="profile__name">
                José Santos
              </h2>
              <div className="profile__edit" onClick={props.onEditProfileClick}>
                <img
                  src={editButton}
                  alt="Boton para editar los datos del prefil social"
                  className="profile__edit-button"
                />
              </div>
            </div>
            <h3 className="profile__skills" id="profile__skills">
              Qa Automator
            </h3>
          </div>
          <div className="button" onClick={props.onAddPlaceClick}>
            <div className="button__plus"></div>
          </div>
        </section>
        <section className="elements">
          <template className="card-template">
            <article className="cards">
              <button className="cards__delete" name="eliminar">
                <img
                  alt="imagen de cesto de basura para eliminar cards"
                  className="cards__delete-image"
                />
              </button>
              <img alt="Imagen del Lago Louise" className="cards__image" />
              <div className="cards__info-container">
                <h4 className="cards__title">Lago Louise</h4>
                <div className="cards__like-container">
                  <button className="cards__like" type="button" name="Like">
                    <img
                      alt="Imagen de reaccion de me gusta de la cards"
                      className="cards__like-image"
                    />
                  </button>
                  <h5 className="cards__counters">7</h5>
                </div>
              </div>
            </article>
          </template>
        </section>
      </main>
    </>
  );
}

export default Main;
