// List.js

import React, { useState } from "react";
import { products } from "../../Information";
import Filter from "./Filter";
import "./List.css";

const List = () => {
  const [selectedCategory, setSelectedCategory] = useState("recommended_menu");
  const [animationClass, setAnimationClass] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("animate");
    }, 50);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredProducts = products
    .filter((product) => product.data_type.includes(selectedCategory))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <div className="product_listWrap">
        <div className="product_list">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`product_item ${animationClass}`}>
              <img src={`images/${product.img}`} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>{product.price.toLocaleString()}원</h4>
              <button>주문하기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
