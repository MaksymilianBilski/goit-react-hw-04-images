import { useGalleryContext } from 'components/ImageGallery/ImageGallery';
import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  const { onImageClick, el } = useGalleryContext();
  return (
    <li className={css.galleryItem} onClick={onImageClick}>
      <img className={css.galleryImg} src={el.webformatURL} alt={el.tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  handleClick: PropTypes.func,
};
