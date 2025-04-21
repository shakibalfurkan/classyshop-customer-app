import carImage from "../../../assets/images/delivery-car.svg";

export default function DeliveryNoticeBar() {
  return (
    <section className="container mt-10 lg:mt-[70px]">
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between bg-white rounded-lg p-4 lg:py-6 lg:px-10 border-2 border-primary">
        <div className="flex items-center gap-3">
          <img
            src={carImage}
            className="w-full max-w-16 hidden lg:block"
            alt="car image"
          />
          <h1 className="uppercase text-xl lg:text-3xl font-medium">
            Free Shipping
          </h1>
        </div>
        <div className="w-0.5 h-[40px] hidden lg:block bg-gray-200"></div>
        <div>
          <p className="text-gray-800 flex-1 text-center">
            Free Delivery Now On Your First Order and over $200
          </p>
        </div>
        <div className="w-0.5 h-[40px] hidden lg:block bg-gray-200"></div>
        <div>
          <h1 className="text-xl lg:text-3xl font-medium">- Only $200*</h1>
        </div>
      </div>
    </section>
  );
}
