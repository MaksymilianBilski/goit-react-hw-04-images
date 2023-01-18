import { useImagesFinderContext } from '../context/ImagesFinderContext';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = () => {
  const { images, onImageClick } = useImagesFinderContext();
  return (
    <ul className={css.gallery}>
      {images.map(el => (
        <ImageGalleryItem
          handleClick={onImageClick}
          src={el.webformatURL}
          alt={el.tags}
        />
      ))}
    </ul>
  );
};
