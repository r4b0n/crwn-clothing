import { createContext, useState, useEffect } from 'react';

//import { addCollectionAndDocs } from '../utils/firebase/firebase.utils';
//import SHOP_DATA from '../shop-data.js';

import { getCategoriesAndDocs } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionAndDocs('categories', SHOP_DATA);
  // }, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocs();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
