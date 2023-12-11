import React from "react";
import "./CartList.css";

const CartList = () => {
  return (
    <div className="cartlist_wrap">
      <div className="cartlist_container">
        <div className="cartlist_list"></div>
        <div className="cartlist_btn">
          <button className="cartlist_closebtn">닫기</button>
          <button className="cartlist_order">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
