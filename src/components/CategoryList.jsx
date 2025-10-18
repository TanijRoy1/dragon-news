import React, { use } from "react";
import { NavLink } from "react-router";

const CategoryList = ({categoryPromise}) => {
    const categories = use(categoryPromise);
  return (
    <div>
      
      <div className="grid grid-cols-1 mt-4 text-center">
        {
            categories.map(category => <NavLink to={`/category/${category.id}`} className={`category btn bg-white border-0`} key={category.id}>{category.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default CategoryList;
