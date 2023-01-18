import { useImagesFinderContext } from 'components/context/ImagesFinderContext';
import css from '../Searchbar/Searchbar.module.css';

export const Searchbar = () => {
  const { onSubmit } = useImagesFinderContext();
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={onSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>
        <input
          className={css.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
