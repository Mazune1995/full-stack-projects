import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    API.get("products/")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Medical Equipment</h1>
      <div className="grid">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
  
}

export default Home;