import React from "react";
import { useEffect } from "react";
import deleteButton from "../../images/delete.svg";
import heart from "../../images/heart.svg";
import { api } from "../../utils/api";

function Card({ card, onCardClick }) {
  function handleClick() {
    console.log("clocik", card);
    onCardClick(card);
  }
  return (
    <article className="cards">
      <button className="cards__delete" name="eliminar">
        <img
          src={deleteButton}
          alt="imagen de cesto de basura para eliminar cards"
          className="cards__delete-image"
        />
      </button>
      <img
        src={card.link}
        alt="Imagen del Lago Louise"
        className="cards__image"
        onClick={handleClick}
      />
      <div className="cards__info-container">
        <h4 className="cards__title">{card.name}</h4>
        <div className="cards__like-container">
          <button className="cards__like" type="button" name="Like">
            <img
              src={heart}
              alt="Imagen de reaccion de me gusta de la cards"
              className="cards__like-image"
            />
          </button>
          <h5 className="cards__counters">{card.likes.length}</h5>
        </div>
      </div>
    </article>
  );
}

export default Card;
