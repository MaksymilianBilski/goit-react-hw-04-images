import { useMyContext } from 'components/App';
import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = () => {
  const handleKeyDown = () => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        return onModalClose(evt);
      }
    });
  };

  const { modalFormatSrc, onModalClose } = useMyContext();
  return (
    <div>
      <div onClick={onModalClose} className={css.overlay}></div>
      <div onKeyDown={handleKeyDown()}>
        <div className={css.modal}>
          <img src={modalFormatSrc} className={css.modalImg} alt="" />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  onClick: PropTypes.func,
  largeImageURL: PropTypes.string,
};
