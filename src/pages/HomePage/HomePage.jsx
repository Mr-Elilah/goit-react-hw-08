import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to Phone book — Your Smart Contact Manager
      </h1>
      <p className={css.description}>
        Tired of messy phonebooks and lost numbers?&nbsp;
        <strong className={css.highlight}>Phone book</strong> makes it simple to
        store, edit, and find your contacts — all in one place.
      </p>

      <ul className={css.featuresList}>
        <li className={css.featureItem}>
          ✅ Lightning-fast search by name or number
        </li>
        <li className={css.featureItem}>
          ✅ Easy-to-use interface for adding and editing contacts
        </li>
        <li className={css.featureItem}>
          ✅ Stay organized and never lose a number again
        </li>
      </ul>
    </div>
  );
}
