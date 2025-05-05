import { useState, useEffect } from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={backToTop}
      className={
        isVisible
          ? "fixed bg-primary bottom-20 right-4 z-[100] cursor-pointer rounded-md p-2.5 text-white shadow-md hover:shadow-lg custom-float"
          : "hidden"
      }
    >
      <RiArrowUpDoubleLine className="text-2xl" />
    </button>
  );
};

export default BackToTopButton;
