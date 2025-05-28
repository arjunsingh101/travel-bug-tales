/* eslint-disable @next/next/no-img-element */

export const Benefit = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-[#0DBDAD] w-[25%] px-14 pb-[120px]">
        <div className="pb-[114px] pt-7">
          <img
            src="/images/tbt-logo-white.png"
            alt="logo"
            className="w-[250px] h-[100px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-5xl font-arsenal italic text-white pb-5">
            Leave <br />
            <b>it to us!</b>
          </div>
          <div className="text-lg text-white flex justify-center items-center">
            Embark on tailor-made adventures designed to your preferences—be it
            solo explorations, family vacations, group escapades, or spiritual
            pilgrimages.
          </div>
        </div>
      </div>
      <div className="bg-[#007073] w-[75%] pt-[77px] px-[60px] gap-10 flex flex-row">
        <div className="w-full ">
          <div className="rounded-xl relative pb-4 ">
            <img
              src={"/images/benefit-1.png"}
              alt="benefit-1"
              className="size-full max-h-[350px] object-cover rounded-xl"
            />
            <div className="absolute bottom-8 text-xl font-bold font-arsenal leading-5 left-5 text-white">
              Customized <br /> Tours
            </div>
          </div>
          <div className="text-sm font-serif text-white px-5">
            Collaborate with our experts to create a personalized itinerary that
            transforms your travel dreams into reality.
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-xl relative pb-4">
            <img
              src={"/images/benefit-2.png"}
              alt="benefit-1"
              className="size-full max-h-[350px] object-cover rounded-xl"
            />
            <div className="absolute bottom-8 text-xl font-bold  leading-5 font-arsenal left-5 text-white">
              Hassle-free <br /> Arrangements
            </div>
          </div>
          <div className="text-sm font-serif text-white px-5">
            Our expert team ensures every aspect of your trip is meticulously
            arranged for your peace of mind.
          </div>
        </div>
        <div className="w-full">
          <div className="rounded-xl relative pb-4">
            <img
              src={"/images/benefit-3.png"}
              alt="benefit-1"
              className="size-full max-h-[350px] object-cover rounded-xl"
            />
            <div className="absolute bottom-8 text-xl font-bold leading-5 font-arsenal left-5 text-white">
              Flexible <br />
              Rebooking Policy
            </div>
          </div>
          <div className="text-sm font-serif text-white px-5">
            We offer adaptable travel options, allowing you to modify your
            bookings with ease, ensuring a stress-free luxury experience.
          </div>
        </div>
      </div>
    </div>
  );
};
