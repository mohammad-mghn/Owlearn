import React from "react";

const CategoryButton = ({
  styles,
  clickHandler,
  categoryName,
  selectedCourseCategory,
}) => {
  return (
    <button
      onClick={() => {
        clickHandler(categoryName);
      }}
      className={`${styles.courseCategoryButton} ${
        categoryName === selectedCourseCategory
          ? styles.courseCategoryButtonActived
          : ""
      }`}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
