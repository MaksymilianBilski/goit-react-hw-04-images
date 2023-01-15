import { useGalleryContext } from 'components/context/ImageGalleryContext/ImageGalleryContext';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  const { onImageClick, el } = useGalleryContext();
  return (
    <li className={css.galleryItem} onClick={onImageClick}>
      <img className={css.galleryImg} src={el.webformatURL} alt={el.tags} />
    </li>
  );
};
