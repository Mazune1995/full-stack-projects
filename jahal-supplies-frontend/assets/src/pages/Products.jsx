import React from "react";
import categories from "../data/categories";
import CategorySection from "../components/CategorySection";

const Products = () => {
  return (
    <div>
      <h1>Our Medical Equipment Categories</h1>

      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Products;
