import PropTypes from 'prop-types';
import { ImagesFinderContext } from './context/ImagesFinderContext/ImagesFinderContext';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { fetchPhotos } from '../components/services/fetchPhotos';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setModal] = useState();
  const [modalFormatSrc, setModalFormatSrc] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [images, setImages] = useState([]);
  const [page = 1, setPage] = useState();
  const [showBtn, setButton] = useState();

  const onSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.search.value;
    setQuery(inputValue);
    setModal(false);
    setModalFormatSrc('');
    setIsLoading(true);
    setImages([]);
    search(inputValue, page);
  };
  const onPageChange = () => {
    setPage(page + 1);
    setIsLoading(true);
    search(query, page + 1);
  };

  const onImageClick = src => {
    const modalFormat = images.find(el => el.webformatURL === src.target.src);
    setModal(true);
    setModalFormatSrc(modalFormat.largeImageURL);
  };

  const onModalClose = () => {
    setModal(false);
  };

  const search = async (query, page) => {
    const response = await fetchPhotos(query, page);
    setImages(prevState => {
      return [...prevState, ...response.data.hits];
    });
    if (response.data.hits.length < 12) {
      setButton(false);
    }
    if (response.data.hits.length === 12) {
      setButton(true);
    }
    if (response.data.hits.length >= 1 || response.data.hits.length === 0) {
      setIsLoading(false);
    }
    if (response.data.hits.length === 0) {
      Notify.failure("Didn't find any matches!");
    }
  };

  return (
    <ImagesFinderContext.Provider
      value={{
        onSubmit,
        onImageClick,
        onPageChange,
        onModalClose,
        modalFormatSrc,
        images,
      }}
    >
      <Searchbar />
      <ImageGallery items={images} handleClick={onImageClick} />
      {isLoading && <Loader />}
      {showBtn && <Button handleClick={onPageChange} />}
      {isModalOpen && <Modal />}
    </ImagesFinderContext.Provider>
  );
};
ImagesFinderContext.Provider.propTypes = {
  onSubmit: PropTypes.func,
  onImageClick: PropTypes.func,
  onPageChange: PropTypes.func,
  onModalClose: PropTypes.func,
  modalFormatSrc: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
};
