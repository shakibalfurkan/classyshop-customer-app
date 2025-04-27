import ExclusiveDealsBanner from "../ExclusiveDealsBanner/ExclusiveDealsBanner";

export default function ExclusiveDeals() {
  return (
    <section className="container mt-10 lg:mt-[70px]  mb-80">
      <div className="flex flex-col md:flex-row items-center gap-2.5 lg:gap-3">
        <ExclusiveDealsBanner
          img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-6.jpg"
          alt="banner img"
          link="#"
          subTitle="20 Days Return Products"
          title="Mobile Shope-Smart Watch T-55"
        />
        <ExclusiveDealsBanner
          img="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-7.jpg"
          alt="banner img"
          link="#"
          subTitle="Save Up To 30% Off"
          title="Decoration Design Lamp Light"
        />
      </div>
    </section>
  );
}
