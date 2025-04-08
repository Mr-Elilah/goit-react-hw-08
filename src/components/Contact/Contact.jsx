import { FaUser, FaPhoneAlt, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser /> &nbsp;{name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt /> &nbsp;
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete &nbsp; &nbsp;
        <FaRegTrashAlt />
      </button>
    </>
  );
}
