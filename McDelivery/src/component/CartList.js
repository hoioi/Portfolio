import React from "react";
import "./CartList.css";

const CartList = ({ onClose, isCartListActive, cartItems }) => {
  return (
    <div className={`cartlist_wrap ${isCartListActive ? "active" : ""}`}>
      <div className="cartlist_container">
        <div className="cartlist_list">
          {cartItems.map((item) => (
            <div className="cartlist_item" key={item.id}>
              <img src={`images/${item.image}`} alt={item.name} />
              <div className="item_info">
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <p>수량: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cartlist_btn">
          <button className="cartlist_closebtn" onClick={onClose}>
            닫기
          </button>
          <button className="cartlist_order">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
