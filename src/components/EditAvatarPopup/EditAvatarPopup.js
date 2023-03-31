import React from "react";
import btnClose from "../../images/closeIcon.svg";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name={`edit-profile`}
      title={`Cambiar foto de perfil`}
      isOpen={isOpen}
    >
      <form className="form" noValidate>
        <img
          src={btnClose}
          alt="Boton para cerrar el modal o popup"
          className="form__close"
          onClick={onClose}
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
  );
}
