import React, { useState } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

const Filter = ({ onCategoryChange, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("recommended_menu");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term);
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    onCategoryChange(category);
  };

  return (
    <div className="filter_wrap">
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <div className="logo">
          <div className="logoimg"></div>
          <h1>McDelivery</h1>
        </div>
      </Link>
      <input
        className="search"
        type="text"
        placeholder="#메뉴를 입력해주세요"
        value={searchTerm}
        onChange={handleSearchChange}
      ></input>
      <nav>
        <div className="nav_buttons">
          <button
            className={`navigation ${
              activeFilter === "recommended_menu" && "active"
            }`}
            onClick={() => handleFilterClick("recommended_menu")}
          >
            추천메뉴
          </button>
          <button
            className={`navigation ${
              activeFilter === "burger&set" && "active"
            }`}
            onClick={() => handleFilterClick("burger&set")}
          >
            버거 & 세트
          </button>
          <button
            className={`navigation ${activeFilter === "snak&side" && "active"}`}
            onClick={() => handleFilterClick("snak&side")}
          >
            스낵 & 사이드
          </button>
          <button
            className={`navigation ${activeFilter === "drink" && "active"}`}
            onClick={() => handleFilterClick("drink")}
          >
            음료
          </button>
          <button
            className={`navigation ${activeFilter === "dessert" && "active"}`}
            onClick={() => handleFilterClick("dessert")}
          >
            디저트
          </button>
          <button
            className={`navigation ${activeFilter === "happyMill" && "active"}`}
            onClick={() => handleFilterClick("happyMill")}
          >
            해피밀
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Filter;
