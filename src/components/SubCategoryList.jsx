import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { subcategoryArray } from "./data/SubcategoryData";

function SubCategotyList({ category , closeSumMenu }) {
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        let filteredSubcategories = [];
        if (category) {
            filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
        }
        setSubcategories([...filteredSubcategories]);
    }, [category])

    return (
        <div className='bg-white w-[800px] h-auto shadow-lg p-[10px] capitalize'>
            <ul className="grid grid-cols-3 gap-4">
                {subcategories.length > 0 ? (
                    subcategories.map((subcategory) => (
                        <li key={subcategory.id} onClick={closeSumMenu} >
                            <Link to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}`}>{subcategory.name}</Link>
                        </li>
                    ))
                ) : null}
            </ul>
        </div>


    )
}

export default SubCategotyList