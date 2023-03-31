import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import btnClose from "../../images/closeIcon.svg";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export function EditProfilePopup({ isOpen, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {}

  return (
    <>
      <PopupWithForm
        name={`profile`}
        title={`Editar perfil`}
        isOpen={isOpen}
        onSubmit={handleSubmit}
      >
        <form className="form" noValidate name={`profile`}>
          <img
            src={btnClose}
            alt="Boton para cerrar el modal o popup"
            className="form__close"
            id="form-close-refres-profile"
            onClick={onClose}
          />
          <h5 className="form__title">Editar perfil</h5>
          <div className="form__user-info">
            <input
              type="text"
              onChange={handleNameChange}
              placeholder={currentUser.name}
              className="form__input"
              id="form-name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="form-name-error form__input-error">
              Este campo es obligatorio
            </span>
            <input
              type="text"
              onChange={handleDescriptionChange}
              placeholder={currentUser.about}
              className="form__input"
              id="form-skills"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="form-skills-error form__input-error">
              Este campo es obligatorio
            </span>
          </div>
          <button className="form__submit form-profile" type="submit">
            <p className="form__submit-text">Guardar</p>
          </button>
        </form>
      </PopupWithForm>
    </>
  );
}
