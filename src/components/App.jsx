import { useImagesFinderContext } from '../context/ImagesFinderContext';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App = () => {
  const {
    images,
    isLoading,
    showBtn,
    isModalOpen,
    onPageChange,
    onImageClick,
  } = useImagesFinderContext();

  return (
    <>
      <Searchbar />
      <ImageGallery items={images} handleClick={onImageClick} />
      {isLoading && <Loader />}
      {showBtn && <Button handleClick={onPageChange} />}
      {isModalOpen && <Modal />}
    </>
  );
};
