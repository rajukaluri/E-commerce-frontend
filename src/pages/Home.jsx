import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

