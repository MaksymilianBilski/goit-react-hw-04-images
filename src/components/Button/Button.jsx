import { useMyContext } from 'components/App';
import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = () => {
  const { onPageChange } = useMyContext();
  return (
    <div className={css.btnWrapper}>
      <button type="button" className={css.btn} onClick={onPageChange}>
        <span className={css.btnLabel}>load more</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
};
