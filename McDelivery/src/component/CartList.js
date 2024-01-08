import React, { useState, useEffect } from "react";
import "./CartList.css";

const CartList = ({
  onClose,
  isCartListActive,
  cartItems,
  onRemoveFromCart,
}) => {
  const [cart, setCart] = useState(cartItems);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const calculateItemPrice = (item) => {
    let basePrice;

    if (item.type) {
      switch (item.type) {
        case "large_set":
          basePrice = item.L_price;
          break;
        case "set":
          basePrice = item.M_price;
          break;
        case "small":
          basePrice = item.S_price;
          break;
        default:
          basePrice = 0;
      }
    } else {
      basePrice = 0;
    }

    const totalItemPrice = basePrice * item.quantity;
    return totalItemPrice.toLocaleString();
  };

  const TotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const basePrice =
          item.type === "large_set"
            ? item.L_price
            : item.type === "set"
            ? item.M_price
            : item.type === "small"
            ? item.S_price
            : 0;

        return total + basePrice * item.quantity;
      }, 0)
      .toLocaleString();
  };

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  const handleQuantityChange = (itemId, changeType) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === itemId) {
          if (changeType === "increase") {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else if (changeType === "decrease" && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });
      const filteredCart = updatedCart.filter((item) => item.quantity >= 1);

      if (
        changeType === "decrease" &&
        updatedCart.find((item) => item.id === itemId)?.quantity === 0
      ) {
        onRemoveFromCart(itemId);
      }

      return filteredCart;
    });
  };

  return (
    <div className={`cartlist_wrap ${isCartListActive ? "active" : ""}`}>
      <div className="cartlist_container">
        <div className="cartlist_list">
          {cart.map(
            (item) =>
              item.quantity > 0 && (
                <div className="cartlist_item" key={item.id}>
                  <img
                    src={`images/${item.image}`}
                    alt={item.name}
                    className="cartlist_item_img"
                  />
                  <div className="item_info">
                    <h3 className="cartlist_item_name">{item.name}</h3>
                    <p className="cartlist_item_type">{item.type}</p>
                    <p className="cartlist_item_price">
                      {calculateItemPrice(item)} 원
                    </p>

                    <div className="quantity_box">
                      <button
                        className="quantity_box_min"
                        onClick={() =>
                          handleQuantityChange(item.id, "decrease")
                        }
                      >
                        -
                      </button>
                      <p className="quantity_box_quantity">{item.quantity}</p>
                      <button
                        className="quantity_box_plus"
                        onClick={() =>
                          handleQuantityChange(item.id, "increase")
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="cartlist_Total_price">
          <h2 className="text">총 가격</h2>
          <h2 className="number">{TotalPrice()}원</h2>
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
