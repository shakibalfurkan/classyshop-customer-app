export default function ProductHighlightBanner() {
  return (
    <section className="container mt-10 lg:mt-[70px] mb-80">
      <div className="rounded-sm relative group overflow-hidden w-full max-h-[100px]">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/offer-banner.jpg"
          alt="Product Highlight Banner"
          className="h-full w-full  transition-all duration-1000 group-hover:scale-110"
        />

        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white">
          <h1 className="md:text-[34px] lg:text-[45px] font-bold uppercase">
            Watch
          </h1>
          <div className="ml-8 hidden text-xs lg:text-base md:block">
            <span className="block">M6 Smart Band 2.3 – Fitness Band</span>
            <span className="block">
              Men’s and Women’s Health Tracking, Red Strap
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
