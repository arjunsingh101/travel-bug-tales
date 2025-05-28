/* eslint-disable @next/next/no-img-element */

import { ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const BestTous = () => {
  const packeges = [
    {
      id: 1,
      name: "Self-Paced Tour",
      price: "$399",
      description:
        "Give a detailed description of the package you are serving.",
      image: "/images/self-tour.webp",
    },
    {
      id: 2,
      name: "Semi-Guided Tour",
      price: "$499",
      description:
        "Give a detailed description of the package you are serving.",
      image: "/images/semi-self-tour.webp",
    },
    {
      id: 3,
      name: "Fully Guided Tour",
      price: "$599",
      description:
        "Give a detailed description of the package you are serving.",
      image: "/images/guided-tour.webp",
    },
  ];
  return (
    <div className="text-center bg-[#F9F7F0]">
      <div className="text-5xl font-arsenal italic py-[80px] text-black">
        Adventure <span className="text-[#007073]">Begins..</span>
      </div>
      <div className="flex flex-row gap-7 px-9 w-full items-center justify-center pb-[70px]">
        {packeges.map((i) => (
          <div key={i.id}>
            <div className="rounded-[2px] w-[400px] relative pb-4">
              <img
                src={i.image}
                alt={i.name}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div
                className={`absolute bottom-10 text-lg font-semibold leading-5 font-arsenal left-5 text-white whitespace-pre-wrap`}
              >
                {i.name}
              </div>
              <div
                className={`absolute bottom-10 text-lg font-semibold leading-5 font-arsenal right-10 text-white`}
              >
                {i.price}
              </div>
            </div>
            <div className="flex flex-row gap-24 justify-center items-center px-5">
              <div className=" text-black text-start text-base font-serif">{i.description} </div>
              <div>
                <IconButton
                  sx={{
                    backgroundColor: "#007370",
                  }}
                >
                  <ArrowForward />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
