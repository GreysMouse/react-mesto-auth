import React from 'react';

import PopupWithForm from './PopupWithForm';

import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const [isValidName, setIsValidName] = React.useState(true);
  const [isValidDescription, setIsValidDescription] = React.useState(true);

  const [nameValdationMessage, setNameValdationMessage] = React.useState('');
  const [descriptionValdationMessage, setDescriptionValdationMessage] = React.useState('');

  const [isButtonHidden, setIsButtonHidden] = React.useState(false);

  React.useEffect(() => {  
    setName(currentUser.name);
    setDescription(currentUser.about);

    setIsValidName(true);
    setIsValidDescription(true);

    setNameValdationMessage('');
    setDescriptionValdationMessage('');
  }, [props.isOpen, currentUser]);

  React.useEffect(() => {
    isValidName && isValidDescription ? setIsButtonHidden(false) : setIsButtonHidden(true);
  }, [isValidName, isValidDescription]);

  function handleNameInput(evt) {
    setName(evt.target.value);

    if(evt.target.validity.valid) {
      setIsValidName(true);
      setNameValdationMessage('');
    }
    else {
      setIsValidName(false);
      setNameValdationMessage(evt.target.validationMessage);
    }
  }

  function handleDescriptionInput(evt) {
    setDescription(evt.target.value);

    if(evt.target.validity.valid) {
      setIsValidDescription(true);
      setDescriptionValdationMessage('');
    }
    else {
      setIsValidDescription(false);
      setDescriptionValdationMessage(evt.target.validationMessage);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name: name,
      description: description
    });
  }

  return (
    <PopupWithForm
      header="Редактировать профиль"
      buttonText="Сохранить"
      isButtonHidden={isButtonHidden}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input 
        className="popup__input popup__input_content_name"
        type="text"
        value={name || ''}
        onChange={handleNameInput}
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required 
      />
      <span
        className={`popup__input-error${isValidName ? '' : ' popup__input-error_visible'}`}
      >
        {nameValdationMessage}
      </span>
      <input
        className="popup__input popup__input_content_description"
        type="text"
        value={description || ''}
        onChange={handleDescriptionInput}
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        autoComplete="off"
        required
      />
      <span
        className={`popup__input-error${isValidDescription ? '' : ' popup__input-error_visible'}`}
      >
        {descriptionValdationMessage}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;