import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.loaderOverlay}>
      <ClipLoader color="#ffffff" size={60} />
    </div>
  );
}
