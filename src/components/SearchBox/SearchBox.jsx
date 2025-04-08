import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, selectNameFilter } from "../../redux/filterSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor="text">
        Find contact by name
      </label>
      <input
        className={css.input}
        id="text"
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        autoComplete="off"
      />
    </div>
  );
}
