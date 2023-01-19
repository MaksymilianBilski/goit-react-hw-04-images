import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPhotos } from 'services/fetchPhotos';
import { Notify } from 'notiflix';

export const ImagesFinderContext = createContext();
export const useImagesFinderContext = () => useContext(ImagesFinderContext);

const ImagesFinderProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState();
  const [modalFormatSrc, setModalFormatSrc] = useState('');
  const [isLoading, setIsLoading] = useState();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState();

  const onSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.search.value;
    setQuery(inputValue);
    setIsModalOpen(false);
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
    setIsModalOpen(true);
    setModalFormatSrc(modalFormat.largeImageURL);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const search = async (query, page) => {
    const response = await fetchPhotos(query, page);
    console.log(response);
    setImages(prevState => {
      return [...prevState, ...response.data.hits];
    });
    if (response.data.hits.length < 12) {
      setShowBtn(false);
    }
    if (response.data.hits.length === 12) {
      setShowBtn(true);
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
        isModalOpen,
        isLoading,
        showBtn,
      }}
    >
      {children}
    </ImagesFinderContext.Provider>
  );
};

ImagesFinderContext.Provider.propTypes = {
  onSubmit: PropTypes.func,
  onImageClick: PropTypes.func,
  onPageChange: PropTypes.func,
  onModalClose: PropTypes.func,
  modalFormatSrc: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.objectOf({
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
};

export default ImagesFinderProvider;
