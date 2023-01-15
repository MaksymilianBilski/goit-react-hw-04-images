import { useImagesFinderContext } from 'components/context/ImagesFinderContext/ImagesFinderContext';
import css from '../Modal/Modal.module.css';

export const Modal = () => {
  const handleKeyDown = () => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        return onModalClose(evt);
      }
    });
  };

  const { modalFormatSrc, onModalClose } = useImagesFinderContext();
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
