import { Link } from 'react-router-dom';

function AuthForm(props) {
  return (
    <div className="auth__container">
      <h2 className="auth__header">{props.header}</h2>
      <form className="auth__form" onSubmit={props.onSubmit} noValidate>
        {props.children}
        <button
          className={`auth__button${props.isButtonHidden ? ' auth__button_disabled' : ''}`}
          type="submit"
          disabled={props.isButtonHidden}
        >
          {props.buttonText}
        </button>
      </form>
      <Link className="auth__redirect-link" to={props.redirectLink}>{props.redirectLinkText}</Link>
    </div>
  );
}

export default AuthForm;