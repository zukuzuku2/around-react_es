import React, { useContext, useEffect, useState } from "react";
import editButton from "../../images/change_image_profile.png";
import { api } from "../../utils/api";
import Card from "../Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api.getCards().then((data) => {
      setCards(data);
    });
  }, []);

  function handleCardDelete(cardID) {
    api.deleteCard(cardID).then((data) => {});
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  return (
    <>
      <main className="content">
        <section className="profile" id="profile">
          <img
            src={currentUser.avatar}
            alt="Imagen de perfil de usuario"
            className="profile__image"
            id="profile__image"
            onClick={props.onEditAvatarClick}
          />
          <div className="profile__info">
            <div className="profile__edit-container">
              <h2 className="profile__name" id="profile__name">
                {currentUser.name}
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
              {currentUser.about}
            </h3>
          </div>
          <div className="button" onClick={props.onAddPlaceClick}>
            <div className="button__plus"></div>
          </div>
        </section>
        <section className="elements">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                onCardClick={props.onCardClick}
                card={card}
                onCardLike={handleCardLike}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Main;
