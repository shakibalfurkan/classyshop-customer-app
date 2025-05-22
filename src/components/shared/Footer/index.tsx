import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoGiftOutline, IoWalletOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import {
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import carteBleue from "@/assets/images/footer/carte_bleue.png";
import visa from "@/assets/images/footer/visa.png";
import masterCard from "@/assets/images/footer/master_card.png";
import americanExpress from "@/assets/images/footer/american_express.png";
import paypal from "@/assets/images/footer/paypal.png";

const servicesData = [
  {
    id: 1,
    icon: LiaShippingFastSolid,
    title: "Free Shipping",
    description: "For all Orders Over $100",
  },
  {
    id: 2,
    icon: PiKeyReturn,
    title: "30 Days Returns",
    description: "For an Exchange Product",
  },
  {
    id: 3,
    icon: IoWalletOutline,
    title: "Secured Payment",
    description: "Payment Cards Accepted",
  },
  {
    id: 4,
    icon: IoGiftOutline,
    title: "Special Gifts",
    description: "Our First Product Order",
  },
  {
    id: 5,
    icon: RiCustomerService2Line,
    title: "Support 24/7",
    description: "Contact us Anytime",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      {/* services block */}
      <div className="container py-14 lg:py-[70px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-between">
        {/* Service */}
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center gap-3 text-center group"
          >
            <service.icon className="text-[45px] group-hover:text-primary group-hover:-translate-y-1.5 transition-all duration-300" />

            <div className="space-y-1">
              <h3 className="font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* footer links */}
      <div className="border-t border-gray-200 py-10 lg:py-16">
        <div className="container flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between">
          {/* contact us section */}
          <section className="lg:pr-[100px] lg:mr-[100px] lg:border-r border-r-gray-200">
            <h2 className="text-lg font-medium mb-4 lg:mb-6">Contact us</h2>
            <div className="space-y-4">
              <div className="text-sm text-gray-500 space-y-2">
                <p>Classyshop - Mega Super Store</p>
                <p>507-Union Trade Centre</p>
                <p>France</p>
              </div>

              <a href="mailto:sales@classyshop.com" className="text-gray-500">
                sales@classyshop.com
              </a>

              <h1 className="text-xl font-bold text-primary mt-4">
                (+91) 9876-543-210
              </h1>
              <div className="flex items-center gap-2.5">
                <div>
                  <HiOutlineChatBubbleLeftRight className="text-5xl text-primary" />
                </div>
                <div className="text-lg font-medium">
                  <p>Online Chat</p>
                  <p>Get Expert Help</p>
                </div>
              </div>
            </div>
          </section>
          {/* products & company links */}
          <section className="flex-1 flex justify-between">
            {/* products links */}
            <div className="lg:px-4 max-w-[300px] w-full">
              <h2 className="text-lg font-medium mb-4 lg:mb-6">Products</h2>

              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <ul className="space-y-3">
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Prices drop
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      New products
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Best sales
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* company links */}
            <div className="lg:px-4 max-w-[300px] w-full">
              <h2 className="text-lg font-medium mb-4 lg:mb-6">Our company</h2>

              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <ul className="space-y-3">
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Delivery
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Legal Notice
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      About us
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Secure payment
                    </Link>
                  </li>
                  <li className="hover:translate-x-1 transition-all duration-300 w-fit">
                    <Link
                      className="hover:text-primary transition-all duration-300 py-2"
                      to=""
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* subscription section */}
          <section className="lg:pl-4 lg:max-w-[370px] w-full">
            <h2 className="text-lg font-medium mb-4 lg:mb-6">
              Subscribe to newsletter
            </h2>
            <p className="text-gray-500 text-sm mb-4 lg:mb-6">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form>
              <Input
                type="email"
                name="subscriptionEmail"
                placeholder="Your Email Address"
                className="py-5 mb-2.5 min-w-full"
              />
              <Button
                type="submit"
                size={"lg"}
                className="hover:bg-secondary transition-colors duration-300 px-8 py-5 cursor-pointer"
                disabled
              >
                Subscribe
              </Button>
              <div className="flex space-x-2 mt-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-500 -mt-0.5"
                >
                  I agree to the terms and conditions and the privacy policy
                </label>
              </div>
            </form>
          </section>
        </div>
      </div>
      {/* footer end */}
      <div className="pt-4 pb-20 lg:py-4 border-t border-gray-200">
        <div className="container flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* social links */}
          <ul className="flex items-center gap-2.5">
            <li className="text-gray-900 hover:text-white transition-all duration-300 rounded-full bg-white hover:bg-primary border border-gray-300">
              <Link
                to={"https://www.facebook.com"}
                target="_blank"
                className="flex items-center justify-center p-2.5"
              >
                <FaFacebookF className="text-[15px]" />
              </Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all duration-300 rounded-full bg-white hover:bg-primary border border-gray-300">
              <Link
                to={"https://x.com"}
                target="_blank"
                className="flex items-center justify-center p-2.5"
              >
                <FaXTwitter className="text-[15px]" />
              </Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all duration-300 rounded-full bg-white hover:bg-primary border border-gray-300">
              <Link
                to={"https://www.youtube.com"}
                target="_blank"
                className="flex items-center justify-center p-2.5"
              >
                <FaYoutube className="text-[15px]" />
              </Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all duration-300 rounded-full bg-white hover:bg-primary border border-gray-300">
              <Link
                to={"https://www.pinterest.com"}
                target="_blank"
                className="flex items-center justify-center p-2.5"
              >
                <FaPinterestP className="text-[15px]" />
              </Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all duration-300 rounded-full bg-white hover:bg-primary border border-gray-300">
              <Link
                to={"https://www.instagram.com"}
                target="_blank"
                className="flex items-center justify-center p-2.5"
              >
                <FaInstagram className="text-[15px]" />
              </Link>
            </li>
          </ul>

          <div className="order-3 lg:order-none">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Classyshop. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img src={carteBleue} alt="carte_bleue" />
            <img src={visa} alt="visa" />
            <img src={masterCard} alt="master_card" />
            <img src={americanExpress} alt="american_express" />
            <img src={paypal} alt="paypal" />
          </div>
        </div>
      </div>
    </footer>
  );
}
