import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Enter name!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      actions.resetForm();
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={registrationValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <div className={css.field}>
            <label className={css.label} htmlFor="name">
              Username
            </label>
            <Field className={css.input} type="text" name="name" id="name" />
            <ErrorMessage name="name" component="span" className={css.msg} />
          </div>

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
            Register
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" />
    </>
  );
}
