import React from 'react';

function PopupWithForm(props) {


  return (
    <div className={`popup popup_${props.name} popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
      onClick={
        (e) => {
          (e.target === e.currentTarget) && props.onClose({})

        }
      }>
      <div className="popup__modal-window" >
        <button className="button popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}>
        </button>

        <form action="#"
          className={`popup__form popup__form_${props.name}`}
          method="POST"
          name={`form-${props.name}`}
          id={`form-${props.name}`}
          onSubmit={props.onSubmit}
        >
          <h2 className="title popup__title">{props.title}</h2>

          {props.children}

          <button type="submit"
            className={`button popup__button popup__button_${props.name}`}
            aria-label={props.buttonLabel}
            name={`form-button_${props.name}`}>
            {props.buttonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
