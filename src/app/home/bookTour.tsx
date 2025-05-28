import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";

export const BookTour = () => {
  return (
    <div className="bg-black pt-[100px] px-12">
      <div className="bg-book_tour_bg bg-cover relative bg-no-repeat bg-center justify-center items-center flex flex-col">
        <div className="abosolute size-full bg-gradient-r from-black/20 to-black/20 z-10 top-0 left-0" />
        <div>
          <Image
            src="/images/tbt-logo-white.png"
            width={400}
            height={300}
            alt="logo"
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center pb-[120px]">
          <div className="text-5xl font-arsenal italic pt-[40px] pb-5">
            Book a Tour <b>with Us</b>
          </div>
          <div className="max-w-[60%] text-lg font-serif">
            Experience every moment is crafted to perfection & Enjoy dedicated
            support before, during, and after your trip, ensuring every detail
            aligns with your desires.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between py-9">
        <div>
          <p className="text-lg font-arsenal font-bold text-white">Phone</p>
          <p>
            +91 8169833163 <span className="px-2">|</span> +91 7977340013{" "}
          </p>
        </div>
        <div>
          <p className="text-lg font-arsenal font-bold text-white">Email</p>
          <p>Travelbugtales.07@gmail.com </p>
        </div>
        <div>
          <p className="text-lg font-arsenal font-bold text-white">Social</p>
          <p className="flex flex-row gap-3">
            <Facebook />
            <Twitter />
            <Instagram />
          </p>
        </div>
      </div>
    </div>
  );
};
