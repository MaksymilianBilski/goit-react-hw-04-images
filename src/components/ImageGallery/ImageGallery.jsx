import { useImagesFinderContext } from '../context/ImagesFinderContext/ImagesFinderContext';
import { GalleryContext } from 'components/context/ImageGalleryContext/ImageGalleryContext';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = () => {
  const { images, onImageClick } = useImagesFinderContext();
  return (
    <ul className={css.gallery}>
      {images.map(el => (
        <GalleryContext.Provider value={{ onImageClick, el }}>
          <ImageGalleryItem src={el.webformatURL} alt={el.tags} />
        </GalleryContext.Provider>
      ))}
    </ul>
  );
};

GalleryContext.Provider.propTypes = {
  onImageClick: PropTypes.array,
  el: PropTypes.object,
};
