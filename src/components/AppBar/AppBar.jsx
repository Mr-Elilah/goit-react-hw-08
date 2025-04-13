import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import UserMenu from "../UserMenu/UserMenu/";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";
import { selectError, selectLoading } from "../../redux/contacts/contactSlice";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
