
import { useEffect, useState } from "react";
import { getProducts } from "../services/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const data = await getProducts();
          setProducts(data);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
          setError("Failed to load products.");  // Store error message
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-semibold">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
