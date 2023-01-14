import { useMyContext } from 'components/App';
import { createContext, useContext } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import PropTypes from 'prop-types';

export const galleryContext = createContext();
export const useGalleryContext = () => useContext(galleryContext);

export const ImageGallery = () => {
  const { images, onImageClick } = useMyContext();
  return (
    <ul className={css.gallery}>
      {images.map(el => (
        <galleryContext.Provider value={{ onImageClick, el }}>
          <ImageGalleryItem src={el.webformatURL} alt={el.tags} />
        </galleryContext.Provider>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ webformatURL: PropTypes.string, tags: PropTypes.string })
  ),
  handleClick: PropTypes.func,
};
