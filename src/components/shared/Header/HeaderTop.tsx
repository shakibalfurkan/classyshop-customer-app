import { Link } from "react-router-dom";
import SearchForm from "../../SearchForm";

export default function HeaderTop() {
  return (
    <section>
      <div className="container flex items-center justify-between py-6">
        {/* logo */}
        <div>
          <Link to="/">
            <img src="/logo.jpg" alt="logo" />
          </Link>
        </div>

        {/* search bar */}
        <SearchForm />

        {/* icons */}
        <div>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/wishlist" className="relative">
                <span className="material-symbols-outlined">favorite</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium rounded-full px-[6px] py-[2px]">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="relative">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-medium rounded-full px-[6px] py-[2px]">
                  3
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
