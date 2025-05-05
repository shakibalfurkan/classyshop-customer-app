import { Link } from "react-router-dom";

type ExclusiveDealsBannerProps = {
  img: string;
  alt: string;
  link: string;
  subTitle: string;
  title: string;
};

export default function ExclusiveDealsBanner({
  img,
  alt,
  link,
  subTitle,
  title,
}: ExclusiveDealsBannerProps) {
  return (
    <section className="rounded-sm overflow-hidden relative group">
      <img
        src={img}
        alt={alt}
        className="w-full h-full rounded-sm object-cover group-hover:scale-[115%] transition-all duration-1000 ease-out"
      />
      <div className="absolute top-[10%] lg:top-[10%] left-[4%] lg:left-[5%] z-10 max-w-40 md:max-w-[205px] lg:max-w-[295px]">
        <p className="text-sm lg:text-lg mb-1.5 md:mb-1 lg:mb-2.5">
          {subTitle}
        </p>
        <h2 className="md:text-lg lg:text-3xl font-medium mb-1 md:mb-1.5 lg:mb-5">
          {title}
        </h2>
        <Link
          to={link}
          className="cursor-pointer bg-transparent md:bg-primary md:hover:bg-secondary transition-colors duration-300 rounded-sm p-0.5 md:py-1.5 md:px-3.5 lg:py-2.5 lg:px-6 uppercase text-[13px] font-medium underline md:text-white md:no-underline"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
