import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Products Page</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>Total Products: {products.length}</p>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;