import { Link } from 'react-router-dom';

import Menu from './Menu';

function Header(props) {
  return (
    <header className={`header page__header`}>
      <Link className="header__logo" to="/" />
      <Menu
        redirectLink={props.redirectLink}
        redirectText={props.redirectText}
        onRedirect={props.onRedirect}
        userInfo={props.userInfo}
      />
    </header>
  );
}

export default Header;