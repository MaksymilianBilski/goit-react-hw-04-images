import { useImagesFinderContext } from '../context/ImagesFinderContext/ImagesFinderContext';
import { GalleryProvider } from 'components/context/ImageGalleryContext/ImageGalleryContext';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = () => {
  const { images, onImageClick } = useImagesFinderContext();
  return (
    <ul className={css.gallery}>
      {images.map(el => (
        <GalleryProvider value={{ onImageClick, el }}>
          <ImageGalleryItem
            handleClick={onImageClick}
            src={el.webformatURL}
            alt={el.tags}
          />
        </GalleryProvider>
      ))}
    </ul>
  );
};

GalleryProvider.propTypes = {
  onImageClick: PropTypes.array,
  el: PropTypes.object,
};
