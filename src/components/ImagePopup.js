function ImagePopup(props) {
  return (
    <div className={`popup popup_mode_image${props.isOpen ? ' popup_opened' : ''}`} hidden={true}>
      <div className="popup__place-container">
        <figure className="popup__place">
          <img className="popup__place-image" src={props.card.link} alt={props.card.caption} />
          <figcaption className="popup__place-caption">{props.card.caption}</figcaption>
        </figure>
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;