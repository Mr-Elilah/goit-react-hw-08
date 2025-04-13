import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/Operations";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});
export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      toast.error("Login failed. Please check your email and password.");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off" className={css.form}>
          <div className={css.field}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field className={css.input} type="email" name="email" id="email" />
            <ErrorMessage name="email" component="span" className={css.msg} />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field
              className={css.input}
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={css.msg}
            />
          </div>
          <button className={css.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </>
  );
}
