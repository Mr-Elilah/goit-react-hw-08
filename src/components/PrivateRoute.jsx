import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return IsLoggedIn ? component : <Navigate to={redirectTo} />;
}
