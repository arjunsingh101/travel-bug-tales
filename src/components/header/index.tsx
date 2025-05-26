import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

export const Header = () => {
  return (
    <header className="fixed flex px-10  py-10 flex-row justify-between z-50 w-full transition-transform duration-300">
      <div>
        <div className="text-white"> Logo</div>
      </div>
      <div className="text-white flex flex-row gap-5 items-center">
        <div>About Us</div>
        <div>Contact US</div>
        <div>
          <Button
            disableRipple
            sx={{
            //   fontFamily: `${poppins}`,
              fontSize: "16px",
              fontWeight: "500",
              textTransform: "capitalize",
              maxHeight: "44px",
              width: "160px",
              borderRadius: "8px",
              backgroundColor: "white",
              paddingX: "8px",
              paddingY: "12px",
              color: "#001D5C",
              ":hover": {
                backgroundColor: "#FFB657",
              },
            }}
            className="group !font-poppins"
          >
            <span className="relative mr-2 !font-poppins !font-medium !transition-all duration-500 group-hover:pr-2">
              Book Now
            </span>
            <ArrowForwardIcon
              className="transition-all duration-500 group-hover:right-2"
              fontSize="small"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};
