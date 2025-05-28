import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

export const HomeHeroBanner = () => {
  return (
    <div className="realtive h-screen bg-cover bg-gradient-to-r from-black/70 to-black/25">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* <source src="images/hero-video.webm" type="video/webm" /> */}
        <source src="images/home-hero-banner-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-32 md:bottom-10 left-5 md:left-10">
        <div className="text-6xl md:text-[64px] text-white md:max-w-[60%] leading-[68px] font-arsenal">
          Experience the World in <b>Unparalleled Luxury.</b>
        </div>
      </div>
      <div className="absolute bottom-10 right-[60%] md:right-10">
        <Button
          disableRipple
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            textTransform: "capitalize",
            maxHeight: "44px",
            width: "150px",
            borderRadius: "25px",
            backgroundColor: "#C73235",
            paddingX: "8px",
            paddingY: "12px",
            color: "white",
          }}
          className="group !font-poppins"
        >
          <span className="relative mr-2 !font-poppins !font-medium !transition-all duration-500 group-hover:pr-2">
            Book Now
          </span>
          <ArrowForward
            className="transition-all duration-500 group-hover:right-2"
            fontSize="small"
          />
        </Button>
      </div>
    </div>
  );
};
