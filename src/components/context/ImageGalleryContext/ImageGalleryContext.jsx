import { createContext, useContext } from 'react';

export const GalleryContext = createContext();
export const useGalleryContext = () => useContext(GalleryContext);

export const GalleryProvider = ({ children, value }) => {
  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};
