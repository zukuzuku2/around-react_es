function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_${props.name} ${props.fct ? "show" : ""}`}>
        {/* <div className={`popup popup_profile ${true ? "show" : ""}`}> */}
        <form className="form" noValidate name={props.name}>
          <img
            alt="Boton para cerrar el modal o popup"
            className="form__close"
            id="form-close-refres-profile"
          />
          <h5 className="form__title">Editar perfil</h5>
          <div className="form__user-info">
            <input
              type="text"
              placeholder="Inserte su Nombre"
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
              placeholder="Inserte su Skill"
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
        <div className="overlay"></div>
      </div>
    </>
  );
}
export default PopupWithForm;

// export class PopupWithForm extends Popup {
//   constructor(popupSelector, callback) {
//     super(popupSelector);
//     this._popupSelector = popupSelector;
//     this._callback = callback.bind(this);
//     this.setEventListeners();
//   }
//   _getInputValues() {
//     return Array.from(this._popupSelector.querySelectorAll(".form__input"));
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     const form = this._popupSelector
//       .querySelector(".form")
//       .addEventListener("submit", (evt) => {
//         this._callback(this._getInputValues(), evt);
//         this._popupSelector.querySelector(".form__submit-text").textContent =
//           "Guardando...";
//         this.close();
//       });

//     this._popupSelector
//       .querySelector(".form__close")
//       .addEventListener("click", () => {
//         super.close();
//       });
//   }

//   close() {
//     super.close();
//     this._popupSelector.querySelector(".form").reset();
//   }
// }
