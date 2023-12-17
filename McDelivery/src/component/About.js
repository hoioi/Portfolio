import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = ({ product, onClose, onAddToCart, onAddToCartInCartList }) => {
  const contentLines = product.content_text
    ? product.content_text.split("<br />")
    : [];
  const contentLines_allergy = product.allergy
    ? product.allergy.split("<br />")
    : [];
  const contentLines__country = product.country
    ? product.country.split("<br />")
    : [];

  const [selectedType, setSelectedType] = useState("set");
  const [quantity, setQuantity] = useState(0);

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleMinClick = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const [showNutrition, setShowNutrition] = useState(false);

  const [showAllergy, setShowAllergy] = useState(false);

  const [showCountry, setShowCountry] = useState(false);

  const getImageSrc = () => {
    switch (selectedType) {
      case "small":
        return `images/${product.S_img}`;
      case "set":
        return `images/${product.M_img}`;
      case "large_set":
        return `images/${product.M_img}`;
      default:
        return "";
    }
  };

  const renderPrice = () => {
    switch (selectedType) {
      case "small":
        return product.S_price * quantity;
      case "set":
        return product.M_price * quantity;
      case "large_set":
        return product.L_price * quantity;
      default:
        return 0;
    }
  };

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      type: selectedType,
      quantity: quantity,
      image: selectedType === "set" ? product.M_img : product.S_img,
    };

    onAddToCart(item);

    if (typeof onAddToCartInCartList === "function") {
      onAddToCartInCartList(item);
    }
  };
  return (
    <div className="About_wrap">
      <div className="About_container">
        <FontAwesomeIcon icon={faXmark} className="xmark" onClick={onClose} />
        <h3 className="name">{product.name}</h3>
        <h3 className="en_name">{product.en_name}</h3>
        <img src={getImageSrc()} alt={product.name} />
        <div className="type_button">
          {product.S_price && (
            <div
              className={`button_type_small ${
                selectedType === "small" ? "active" : ""
              }`}
              onClick={() => handleTypeClick("small")}
            >
              <img src={`images/${product.S_img}`} alt={product.name} />S
            </div>
          )}
          {product.M_price && (
            <div
              className={`button_type_set ${
                selectedType === "set" ? "active" : ""
              }`}
              onClick={() => handleTypeClick("set")}
            >
              <img src={`images/${product.M_img}`} alt={product.name} />M
            </div>
          )}
          {product.L_price && (
            <div
              className={`button_type_large_set ${
                selectedType === "large_set" ? "active" : ""
              }`}
              onClick={() => handleTypeClick("large_set")}
            >
              <img src={`images/${product.M_img}`} alt={product.name} />L
            </div>
          )}
        </div>
        <div className="number_btn">
          <button className="min_btn" onClick={handleMinClick}>
            -
          </button>
          <h2 className="number">{quantity}</h2>
          <button className="plus_btn" onClick={handlePlusClick}>
            +
          </button>
        </div>

        <div className="content_textBox">
          {contentLines.map((line, index) => (
            <p className="content_text" key={index}>
              {line}
            </p>
          ))}
        </div>
        <div className="nutrition_facts_label_wrap">
          <div className="nutrition_facts_label_title">
            <h1>영양성분표</h1>
            <FontAwesomeIcon
              icon={faPlus}
              className="pluse"
              onClick={() => setShowNutrition(!showNutrition)}
            />
          </div>
          {showNutrition && (
            <div className="nutrition_facts_label">
              <div className="kcal nutrition">
                <h3>열량(Kcal)</h3>
                <h1>{product.Kcal}</h1>
              </div>
              {product.set_Kcal && (
                <div className="set_price nutrition">
                  <h3>열량(세트)</h3>
                  <h1>{product.set_Kcal}</h1>
                </div>
              )}
              {product.large_set_Kcal && (
                <div className="large_set_Kcal nutrition">
                  <h3>열량(라지세트)</h3>
                  <h1>{product.large_set_Kcal}</h1>
                </div>
              )}

              <div className="weight nutrition">
                <h3>중량(g/ml)</h3>
                <h1>{product.weight}</h1>
              </div>
              <div className="suger nutrition">
                <h3>당(g/%)</h3>
                <h1>{product.suger}</h1>
              </div>
              <div className="protein nutrition">
                <h3>단백질(g/%)</h3>
                <h1>{product.protein}</h1>
              </div>
              <div className="saturated_fat nutrition">
                <h3>포화지방(g/%)</h3>
                <h1>{product.saturated_fat}</h1>
              </div>
              <div className="sodium nutrition">
                <h3>나트륨(g/%)</h3>
                <h1>{product.sodium}</h1>
              </div>
            </div>
          )}
        </div>
        {product.allergy && (
          <div className="allergy_wrap">
            <div className="allergy_title">
              <h1>알레르기 정보</h1>
              <FontAwesomeIcon
                icon={faPlus}
                className="pluse"
                onClick={() => setShowAllergy(!showAllergy)}
              />
            </div>
            {showAllergy && (
              <div className="allergy">
                {contentLines_allergy.map((line, index) => (
                  <h3 className="allergy_text" key={index}>
                    {line}
                  </h3>
                ))}
              </div>
            )}
          </div>
        )}
        {product.country && (
          <div className="country_wrap">
            <div className="country_title">
              <h1>원산지 정보</h1>
              <FontAwesomeIcon
                icon={faPlus}
                className="pluse"
                onClick={() => setShowCountry(!showCountry)}
              />
            </div>
            {showCountry && (
              <div className="country">
                {contentLines__country.map((line, index) => (
                  <h3 className="country_text" key={index}>
                    {line}
                  </h3>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="total_wrap">
          <h1>주문내역</h1>
          <div className="selected_price">
            {renderPrice().toLocaleString()}원
          </div>
        </div>
        <div className="bottom_button">
          <button className="About_closebtn" onClick={onClose}>
            취소하기
          </button>
          <button
            className="order_btn"
            onClick={() => {
              handleAddToCart();
            }}
          >
            장바구니 추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
