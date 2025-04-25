import FeaturedOffersBanner from "../FeaturedOffersBanner";

export default function FeaturedOffers() {
  return (
    <section className="container mt-5 lg:mt-[70px]">
      <div className="flex flex-col md:flex-row items-center gap-2.5 lg:gap-3">
        <FeaturedOffersBanner
          image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"
          alt="advertisement banner image 1"
          link="#"
          title="S22 Samsung Smartphone"
          price="250,000"
        />
        <FeaturedOffersBanner
          image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg"
          alt="advertisement banner image 2"
          link="#"
          title="Armchair Mad By shopstic"
          price="19,000"
        />
        <FeaturedOffersBanner
          image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"
          alt="advertisement banner image 3"
          link="#"
          title="Noise Wireless Headphones"
          price="12,900"
        />
      </div>
    </section>
  );
}
