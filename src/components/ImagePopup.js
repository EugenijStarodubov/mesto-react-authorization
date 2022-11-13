import React from "react";



function ImagePopup(props) {

  const handleClosePopup = (e) => {
    (e.target === e.currentTarget) && props.onClose();
  }

  return (
    <>
      <div className={`popup popup_type_image ${(props.card.isOpen) && 'popup_opened'}`}
        onClick={handleClosePopup}>
        <figure className="popup__show-image" >
          <button className="button popup__close-button popup__close-button_place_image" type="button"
            aria-label="Закрыть"
            onClick={props.onClose} ></button>
          <img src={props.card.link} alt={props.card.name} className="popup__image popup__item" />
          <figcaption className="popup__image-caption">{props.card.name}</figcaption>
        </figure>
      </div >
    </>
  )
}

export default ImagePopup;