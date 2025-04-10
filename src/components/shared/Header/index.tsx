import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import TopStrip from "./TopStrip";

export default function Header() {
  return (
    <header>
      <TopStrip />
      <HeaderTop />
      <Navbar />
    </header>
  );
}
