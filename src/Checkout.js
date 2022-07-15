import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  const [{ cart, user}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" />
        <div>
          <h3>Hello, {!user ? 'Guest' : user.email}</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>
          {cart.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;