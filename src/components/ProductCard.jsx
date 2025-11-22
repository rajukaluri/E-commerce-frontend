import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ddd", padding: 10 }}>
      <img src={product.image} width={150} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

