import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Enter name!"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers!")
    .min(3, "Too short!")
    .max(15, "Too long!")
    .required("Enter a phone number!"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          ></Field>
          <ErrorMessage name="name">
            {(msg) => <span className={css.msg}>{msg}</span>}
          </ErrorMessage>
        </div>

        <div className={css.field}>
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id="number"
            autoComplete="off"
          ></Field>
          <ErrorMessage name="number">
            {(msg) => <span className={css.msg}>{msg}</span>}
          </ErrorMessage>
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
