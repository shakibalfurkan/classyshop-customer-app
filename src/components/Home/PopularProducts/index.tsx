import ProductCard from "@/components/ProductCard";

export default function PopularProducts() {
  return (
    <section className="container mt-10 lg:mt-[70px]">
      <h1 className="text-xl md:text-[22px] font-medium mb-8">
        Popular Products
      </h1>
      <div className="flex gap-2">
        <ProductCard />
        <ProductCard />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </section>
  );
}
