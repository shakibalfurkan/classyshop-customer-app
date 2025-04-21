import advertisement1 from "../../assets/images/advertisements/advertisement-1.jpg";
import advertisement2 from "../../assets/images/advertisements/advertisement-2.jpg";
import advertisement3 from "../../assets/images/advertisements/advertisement-3.jpg";
import FeaturedOffersBanner from "../FeaturedOffersBanner";

export default function FeaturedOffers() {
  return (
    <section className="container mt-5 lg:mt-[70px] mb-80">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <FeaturedOffersBanner
          image={advertisement1}
          alt="advertisement banner image 1"
          link="#"
          title="Best Offer For Smartphone"
          price="250.00"
        />
        <FeaturedOffersBanner
          image={advertisement2}
          alt="advertisement banner image 2"
          link="#"
          title="Best prices on chairs"
          price="190.00"
        />
        <FeaturedOffersBanner
          image={advertisement3}
          alt="advertisement banner image 3"
          link="#"
          title="Best price on headphones!"
          price="129.00"
        />
      </div>
    </section>
  );
}
