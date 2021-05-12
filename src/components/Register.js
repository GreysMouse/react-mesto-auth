import React from 'react';

import AuthForm from './AuthForm';

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);

  const [emailValdationMessage, setEmailValdationMessage] = React.useState('');
  const [passwordValdationMessage, setPasswordValdationMessage] = React.useState('');

  const [isButtonHidden, setIsButtonHidden] = React.useState(true);

  React.useEffect(() => {
    isValidEmail && isValidPassword ? setIsButtonHidden(false) : setIsButtonHidden(true);
  }, [isValidEmail, isValidPassword]);

  function handleEmailInput(evt) {
    setEmail(evt.target.value);

    if(evt.target.validity.valid) {
      setIsValidEmail(true);
      setEmailValdationMessage('');
    }
    else {
      setIsValidEmail(false);
      setEmailValdationMessage(evt.target.validationMessage);
    }
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);

    if(evt.target.validity.valid) {
      setIsValidPassword(true);
      setPasswordValdationMessage('');
    }
    else {
      setIsValidPassword(false);
      setPasswordValdationMessage(evt.target.validationMessage);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    setEmail('');
    setPassword('');
    
    setIsValidEmail(false);
    setIsValidPassword(false);

    props.onRegister({
      email: email,
      password: password
    });
  }

  return (
    <main className="auth">
      <AuthForm
        header="Регистрация"
        buttonText="Зарегистрироваться"
        isButtonHidden={isButtonHidden}
        redirectLink="/sign-in"
        redirectLinkText="Уже зарегистрированы? Войти"
        onSubmit={handleSubmit}
      >
      <input
          className="auth__input auth__input_content_email"
          type="email"
          value={email || ''}
          onChange={handleEmailInput}
          placeholder="Email"
          autoComplete="off"
          required
        />
        <span
          className={`auth__input-error${isValidEmail ? '' : ' auth__input-error_visible'}`}
        >
          {emailValdationMessage}
        </span>
        <input
          className="auth__input auth__input_content_password"
          type="password"
          value={password || ''}
          onChange={handlePasswordInput}
          placeholder="Пароль"
          minLength="6"
          autoComplete="off"
          required
        />
        <span
          className={`auth__input-error${isValidPassword ? '' : ' auth__input-error_visible'}`}
        >
          {passwordValdationMessage}
        </span>
      </AuthForm>
    </main>
  );
}

export default Register;