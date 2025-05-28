/* eslint-disable @next/next/no-img-element */
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, InputLabel, TextField } from "@mui/material";

export const GetInTouch = () => {
  return (
    <div className="relative bg-get_in_touch_bg bg-center bg-no-repeat bg-cover">
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0, 112, 115, 0.75)",
          zIndex: 10,
          top: 0,
          left: 0,
        }}
      />
      <div className="absolute z-10 left-[25%] border-[4px] border-white rounded-t-full rounded-b-full top-[15%] bg-git_1 bg-cover w-[180px] h-[450px] bg-center " />
      <div className="absolute z-10 left-[41%] border-[4px] border-white rounded-t-full rounded-b-full top-[25%] bg-git_2 bg-cover w-[160px] h-[350px] bg-center " />
      <div className="absolute z-10 left-[55%] border-[4px] border-white rounded-t-full rounded-b-full top-[25%] bg-git_3 bg-cover w-[160px] h-[350px] bg-center " />

      {/* Content */}
      <div className="relative z-20 flex flex-row justify-between px-10 py-10">
        <div className="flex flex-col justify-between">
          <div className="pl-10">
            <img
              src="/images/tbt-logo-white.png"
              alt="logo"
              className="w-[250px] h-[100px]"
            />
          </div>
          <div>
            <div className="text-lg font-montserrat font-bold py-1 bg-white/50 px-5 rounded-full max-w-[220px]">
              Start Traveling Now
            </div>
            <div className="text-[45px] text-white font-bold outlined-only font-serif leading-[48px] pt-10">
              Thrilling Expeditions <br /> for Every Explorer
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#5DE0E6]/90 to-[#0048B3]/90 px-16 py-10 rounded-lg">
          <div className="text-4xl font-poppins font-bold text-white py-5 text-center ">
            Get in touch.
          </div>
          <form className="flex flex-col gap-5">
            <div>
              <InputLabel sx={{ color: "white", fontFamily: "poppins" }}>
                Your Name
              </InputLabel>
              <TextField
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "none",
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: 0, // remove extra padding
                  },
                  "& .MuiOutlinedInput-input": {
                    height: "40px",
                    padding: "0 14px", // vertical padding must be 0 to fit height
                    boxSizing: "border-box",
                  },
                }}
              />
            </div>
            <div>
              <InputLabel sx={{ color: "white", fontFamily: "poppins" }}>
                Email Address
              </InputLabel>
              <TextField
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "none",
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: 0, // remove extra padding
                  },
                  "& .MuiOutlinedInput-input": {
                    height: "40px",
                    padding: "0 14px", // vertical padding must be 0 to fit height
                    boxSizing: "border-box",
                  },
                }}
              />
            </div>
            <div>
              <InputLabel sx={{ color: "white", fontFamily: "poppins" }}>
                Phone Number
              </InputLabel>
              <TextField
                variant="outlined"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "none",
                  width: "400px",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    padding: 0, // remove extra padding
                  },
                  "& .MuiOutlinedInput-input": {
                    height: "40px",
                    padding: "0 14px", // vertical padding must be 0 to fit height
                    boxSizing: "border-box",
                  },
                }}
              />
            </div>
            <div>
              <InputLabel sx={{ color: "white", fontFamily: "poppins" }}>
                Message
              </InputLabel>
              <TextField
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "none",
                  width: "400px",
                }}
                id="filled-multiline-flexible"
                multiline
                minRows={2}
                maxRows={2}
                variant="outlined"
              />
            </div>

            <Button
              type="submit"
              sx={{
                maxWidth: "120px",
                maxHeight: "36px",
                borderRadius: "12px",
                color: "white",
              }}
              className="bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
            >
              Submit <ArrowForward className="pl-1" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
