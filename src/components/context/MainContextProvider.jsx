import React, { createContext } from 'react'
import { categoryArray } from '../../components/data/CategoryData';
import { subcategoryArray } from '../../components/data/SubcategoryData';
import { productArray } from '../../components/data/ProductData';
import { orangeSectionData, greenSectionData } from '../../components/data/CategorySectionData';
import { searchValues } from '../../components/data/SearchValues';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{categoryArray, subcategoryArray, productArray, orangeSectionData, greenSectionData, searchValues}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider
