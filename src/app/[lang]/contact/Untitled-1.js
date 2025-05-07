import Image from 'next/image';
import he from 'he'; // Import HTML entity decoder
import { fetchProducts } from "../utils/pranaair-product";

export default async function ProductsPage() {  
  const products = await fetchProducts();

  return (
    <div>
      <h1>Our Products</h1>
      <div>
        {products.map((product) => {
          // Extract currency symbol from price_html
          const match = product.price_html.match(/woocommerce-Price-currencySymbol">(.*?)<\/span>/);
          const rawSymbol = match ? match[1] : "";
          const currencySymbol = he.decode(rawSymbol); // Decode HTML entity properly

          return (
            <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
              <Image
                src={product.images[0]?.src}
                alt={product.name}
                width={300}
                height={300}
              />
              <h3>{product.name}</h3>
              <p>Price: {product.price} {currencySymbol}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
