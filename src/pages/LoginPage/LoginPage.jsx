import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../ContactPage/ContactPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Please log in</h2>
      <LoginForm />
    </div>
  );
}
