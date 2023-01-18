import { useImagesFinderContext } from 'components/context/ImagesFinderContext';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, alt }) => {
  const { onImageClick } = useImagesFinderContext();
  return (
    <li className={css.galleryItem} onClick={onImageClick}>
      <img className={css.galleryImg} src={src} alt={alt} />
    </li>
  );
};
