import { createContext, useContext } from 'react';

export const ImagesFinderContext = createContext();
export const useImagesFinderContext = () => useContext(ImagesFinderContext);
