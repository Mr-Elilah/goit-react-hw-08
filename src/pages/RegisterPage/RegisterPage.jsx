import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "../ContactPage/ContactPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Register your account</h2>
      <RegistrationForm />
    </div>
  );
}
