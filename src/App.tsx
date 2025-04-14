import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";
import MobileNav from "./components/shared/Header/MobileNav";

export default function App() {
  return (
    <section className="h-full min-h-screen">
      <Header />
      {/* mobile navbar */}
      <MobileNav />

      {/* main content */}
      <Outlet />
    </section>
  );
}
