import AnnouncementMarquee from "@/components/AnnouncementMarquee";
import Banner from "@/components/Banner";
import DeliveryNoticeBar from "@/components/DeliveryNoticeBar";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedOffers from "@/components/FeaturedOffers";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Banner />
      <AnnouncementMarquee />
      <FeaturedCategories />
      <DeliveryNoticeBar />
      <FeaturedOffers />
    </section>
  );
}
