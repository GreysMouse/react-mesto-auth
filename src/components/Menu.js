import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className="menu">
      <p className="menu__info">{props.userInfo ? props.userInfo.email : ""}</p>
      <Link
        className={`menu__link${props.userInfo ? " menu__link_color_grey" : ""}`}
        to={props.redirectLink}
        onClick={props.onRedirect}
      >
        {props.redirectText}
      </Link>
    </div>
  );
}

export default Menu;