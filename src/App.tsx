import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import MobileNav from "./components/shared/Header/MobileNav";
import BackToTopButton from "./components/shared/BackToTopButton";

export default function App() {
  return (
    <section className="h-full min-h-screen">
      <Header />
      {/* mobile navbar */}
      <MobileNav />
      {/* back to top button */}
      <BackToTopButton />

      {/* main content */}
      <Outlet />
    </section>
  );
}
