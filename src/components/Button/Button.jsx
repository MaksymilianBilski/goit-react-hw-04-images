import { useImagesFinderContext } from '../context/ImagesFinderContext';
import css from '../Button/Button.module.css';

export const Button = () => {
  const { onPageChange } = useImagesFinderContext();
  return (
    <div className={css.btnWrapper}>
      <button type="button" className={css.btn} onClick={onPageChange}>
        <span className={css.btnLabel}>load more</span>
      </button>
    </div>
  );
};
