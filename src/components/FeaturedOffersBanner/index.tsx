import { Link } from "react-router-dom";

type FeaturedOffersBannerProps = {
  image: string;
  alt: string;
  link: string;
  title: string;
  price: string;
};

export default function FeaturedOffersBanner({
  image,
  alt,
  link,
  title,
  price,
}: FeaturedOffersBannerProps) {
  return (
    <section className="rounded-lg relative max-w-[450px] overflow-hidden group">
      <Link to={link} className="w-full h-full">
        <img
          src={image}
          alt={alt}
          className="rounded-sm group-hover:scale-[115%] transition-all duration-1000 ease-out"
        />
        <div className="absolute top-6 md:top-3 lg:top-8 right-1.5 lg:right-5 max-w-[150px] md:max-w-24 lg:max-w-[170px]">
          <h2 className="text-xl md:text-[15px] lg:text-2xl font-medium mb-1.5 lg:mb-4 capitalize">
            {title}
          </h2>
          <h3 className="md:text-[15px] lg:text-xl font-medium text-primary mb-2 md:mb-0.5 lg:mb-2">
            ${price}
          </h3>
          <Link
            to={link}
            className="text-sm md:text-[13px] lg:text-sm uppercase font-medium underline hover:no-underline p-0.5"
          >
            Shop Now
          </Link>
        </div>
      </Link>
    </section>
  );
}
