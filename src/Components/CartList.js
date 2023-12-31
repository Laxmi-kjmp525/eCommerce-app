import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart, removeFromCart }) {
    const [CART, setCART] = useState([]);
  
    useEffect(() => {
      setCART(cart);
    }, [cart]);
  
    return (
      <div>
        {CART?.map((cartItem, cartindex) => (
          <div key={cartindex} className="cart-item">
            <img src={cartItem.url} alt={cartItem.name} width={40} />
            <span>{cartItem.name}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) =>
                  cartindex === index
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item
                );
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) =>
                  cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                );
                setCART(_CART);
              }}
            >
              +
            </button>
            <span>Rs. {cartItem.price * cartItem.quantity}</span>
            <button onClick={() => removeFromCart(cartindex)}>Remove</button>
          </div>
        ))}
  
        <p>
          Total: Rs.{' '}
          {CART.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
        </p>
      </div>
    );
  }
  export default CartList
  