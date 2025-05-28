/* eslint-disable @next/next/no-img-element */

export const OurFeatures = () => {
  const featues = [
    { id: 1, image: "/images/solo.webp", lable: "Solo Escape Tours" },
    {
      id: 2,
      image: "/images/family.webp",
      lable: "Family & squad \nTravel Packages",
    },
    {
      id: 3,
      image: "/images/honeymoon.webp",
      lable: "Honeymoon Package \nSpecialist",
    },
    {
      id: 4,
      image: "/images/pilgrimage.webp",
      lable: "Pilgrimage \nTour Packages",
    },
    {
      id: 5,
      image: "/images/transport.webp",
      lable: "Transport & \nAirport Transfers",
    },
  ];

  return (
    <div className="bg-[#F9F7F0] pt-[63px] pb-[150px]">
      <div className="text-center flex flex-col justify-center items-center pb-[100px]">
        <p className="text-5xl font-arsenal italic text-[#007370] font-semibold">
          <span className="text-black">What We</span> Can Offer You
        </p>
        <p className="text-lg text-black font-serif max-w-[60%] pt-5">
          Benefit from our extensive knowledge and industry connections,
          offering you exclusive access to destinations and experiences beyond
          the ordinary.
        </p>
      </div>
      <div className="flex flex-row gap-3 px-9">
        {featues.map((i) => (
          <div className="rounded-[2px] relative pb-4" key={i.id}>
            <img
              src={i.image}
              alt=""
              className="size-full h-[300px] object-cover rounded-xl"
            />
            <div
              className={`absolute ${
                i.id === 1 ? "bottom-10" : "bottom-6"
              }  text-lg font-semibold leading-5 font-arsenal left-5 text-white whitespace-pre-wrap`}
            >
              {i.lable}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
