import Marquee from "react-fast-marquee";

export default function AnnouncementMarquee() {
  return (
    <section className="container mt-8">
      <div className="bg-white rounded-lg shadow px-2">
        <Marquee>
          <p className=" py-3 text-gray-800">
            🛒 Big Savings This Week! | 🚚 Free Shipping On Orders Over $50 | 🎁
            New Arrivals Dropping Daily | 🔥 Shop The Best Deals Now!
          </p>
        </Marquee>
      </div>
    </section>
  );
}
