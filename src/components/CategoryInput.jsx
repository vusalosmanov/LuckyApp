import React, { useState } from 'react'

const CategoryInput = () => {

  const [ priceFilter , setPriceFilter ] = useState(2000);


  const handleInputPrice = (e) =>{
    setPriceFilter(e.target.value)
  }

   return (
    <div>CategoryInput</div>
  )
}

export default CategoryInput