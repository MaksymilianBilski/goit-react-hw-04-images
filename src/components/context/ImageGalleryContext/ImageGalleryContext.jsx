import { createContext, useContext } from 'react';

export const GalleryContext = createContext();
export const useGalleryContext = () => useContext(GalleryContext);
