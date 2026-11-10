import "../components/css/cards.css";
const products = [
  {
    id: 1,
    title: "Premium Sneakers",
    category: "Footwear",
    price: "129.99",
    tag: "New",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    description:
      "Experience ultimate comfort and modern style with our premium sneakers.",
  },
  {
    id: 2,
    title: "Classic Watch",
    category: "Accessories",
    price: "89.99",
    tag: "Popular",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    description:
      "A stylish watch designed for everyday elegance and sophistication.",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    category: "Electronics",
    price: "59.99",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    description:
      "Enjoy crystal clear sound with comfortable wireless headphones.",
  },
];

const Cards = () => {
  return (
    <section className="container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Cards;
