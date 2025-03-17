const fetchCart = async () => {
    try {
      const response = await fetch("https://pranaair.com/wp-json/custom/v1/cart", {
        credentials: "include",
      });
      const data = await response.json();
      console.log("Cart Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      return { items: [], count: 0 };
    }
  };
  
  export { fetchCart };
  