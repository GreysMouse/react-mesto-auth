import { Route } from 'react-router-dom';

function ProtectedRoute(props) {
  return (
    <Route>
      {props.children}
    </Route>
  );
}

export default ProtectedRoute;