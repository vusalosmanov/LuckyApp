import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { subcategoryArray } from "../data/SubcategoryData";

function SubCategoryList({ category, closeSubMenu }) {
    const [subcategories, setSubcategories] = useState([]);

    useEffect(() => {
        let filteredSubcategories = [];
        if (category) {
            filteredSubcategories = subcategoryArray.filter(
                (sb) => sb.categoryID === category.id
            );
        }
        setSubcategories([...filteredSubcategories]);
    }, [category]);

    return (
        <div className="lg:bg-white lg:w-[800px] lg:h-[370px] lg:shadow-lg p-[10px] capitalize">
            <ul className="lg:grid lg:grid-cols-3 gap-4">
                {subcategories.length > 0 ? (
                    subcategories.map((subcategory) => (
                        <li className=" list-disc  lg:list-none py-[5px]" key={subcategory.id} onClick={closeSubMenu}>
                            <Link to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}`}>
                                {subcategory.name}
                            </Link>
                        </li>
                    ))
                ) : null}
            </ul>
        </div>
    );
}

export default SubCategoryList;
