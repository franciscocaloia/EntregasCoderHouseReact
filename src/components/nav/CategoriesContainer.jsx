import React from "react";
import MenuItem from "./MenuItem";

const CategoriesContainer = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <MenuItem
          key={category.id}
          content={category.title}
          URL={`/category/${category.id}`}
        ></MenuItem>
      ))}
    </>
  );
};

export default CategoriesContainer;
