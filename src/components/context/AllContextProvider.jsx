import React, { createContext } from 'react'
import { categoryArray } from '../../components/data/CategoryData';
import { subcategoryArray } from '../../components/data/SubcategoryData';
import { productArray } from '../../components/data/ProductData';
import { orangeSectionData, greenSectionData } from '../../components/data/CategorySectionData';
import { searchValues } from '../../components/data/SearchValues';

export const AllContext = createContext();

function AllContextProvider({ children }) {
  return (
    <AllContext.Provider value={{ categoryArray, subcategoryArray, productArray, orangeSectionData, greenSectionData, searchValues }}>
      {children}
    </AllContext.Provider>
  )
}

export default AllContextProvider
