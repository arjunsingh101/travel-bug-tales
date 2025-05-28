/* eslint-disable @next/next/no-img-element */

export const AditionalFeature = () => {
  const feature = [
    {
      id: 1,
      title: "Tailored Luxury Travel Experiences",
      description:
        "Embark on tailor-made adventures designed to your preferences—be it solo explorations, family vacations, group escapades, or spiritual pilgrimages.",
      image: "/images/feature.webp",
    },
    {
      id: 2,
      title: "Exclusive Domestic & International Packages",
      description:
        "Discover curated travel experiences across India and the globe, blending cultural richness with unparalleled luxury.",
      image: "/images/feature.webp",
    },
    {
      id: 3,
      title: "Personalized Pilgrimage Tours",
      description:
        "Reconnect spiritually with our thoughtfully crafted pilgrimage journeys, ensuring comfort and meaningful experiences.",
      image: "/images/feature.webp",
    },
    {
      id: 4,
      title: "Personalized Concierge Services",
      description:
        "Our concierge team manages every detail—from exclusive reservations to itinerary adjustments—so you can focus on enjoying your journey.",
      image: "/images/feature.webp",
    },
  ];
  return (
    <div className="flex flex-col gap-14 bg-[#F9F7F0] px-[80px] pb-[100px]">
      {feature.map((i) => (
        <div
          key={i.id}
          className="flex flex-row gap-[160px] justify-center items-center"
        >
          <div className="w-[80%]">
            <ul className="pl-5">
              <li className="list-disc text-[#00797D] text-lg font-arsenal font-bold">
                {i.title}
                <div className="text-black font-normal ">{i.description}</div>
              </li>
            </ul>
          </div>
          <div className="w-[20%] perspective-1000">
            <img
              src={i.image}
              alt="feature"
              className="w-full h-auto clip-rhombus"
              style={{
                clipPath: "polygon(0 0, 100% 14%, 100% 100%, 0 85%)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
