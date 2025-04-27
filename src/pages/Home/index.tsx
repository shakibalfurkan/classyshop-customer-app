import AnnouncementMarquee from "@/components/Home/AnnouncementMarquee";
import Banner from "@/components/Home/Banner";
import DeliveryNoticeBar from "@/components/Home/DeliveryNoticeBar";
import ExclusiveDeals from "@/components/Home/ExclusiveDeals/ExclusiveDeals";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import FeaturedOffers from "@/components/Home/FeaturedOffers";
import FeaturedProducts from "@/components/Home/FeaturedProducts/FeaturedProducts";
import LatestProducts from "@/components/Home/LatestProducts/LatestProducts";
import PopularProducts from "@/components/Home/PopularProducts";
import ProductHighlightBanner from "@/components/Home/ProductHighlightBanner";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Banner />
      <AnnouncementMarquee />
      <FeaturedCategories />
      <DeliveryNoticeBar />
      <FeaturedOffers />
      <PopularProducts />
      <ProductHighlightBanner />
      <LatestProducts />
      <FeaturedProducts />
      <ExclusiveDeals />
    </section>
  );
}
