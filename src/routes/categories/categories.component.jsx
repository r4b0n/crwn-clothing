import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';

const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    // <> shortcut for fragment without having to import Fragment
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default Categories;
