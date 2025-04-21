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
        <div className="absolute top-10 right-5 max-w-[170px]">
          <h2 className="text-2xl font-medium mb-4 capitalize">{title}</h2>
          <h3 className="text-xl font-medium text-primary mb-2">${price}</h3>
          <Link
            to={link}
            className="text-sm uppercase font-medium underline hover:no-underline p-0.5"
          >
            Shop Now
          </Link>
        </div>
      </Link>
    </section>
  );
}
