import { Star } from "@mui/icons-material";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: "Miguel Rivera",
    },
    {
      id: 2,
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      name: "Larissa Charter",
    },
    {
      id: 3,
      text: "Boost your product and services credibility by adding testimonials from your clients. People love recommendations so feedback from others whove tried it is invaluable.",
      name: "Carey Larson",
    },
  ];
  return (
    <div className="flex relative flex-col justify-center items-center bg-tenstimonial_bg bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className="abosolute size-full bg-gradient-r from-black/20 to-black/20 z-10 top-0 left-0" />
      <div className="text-5xl font-arsenal italic pt-[77px]">
        What Our <b>Clients Say</b>
      </div>
      <div className="flex  flex-row gap-9 py-[152px] px-[100px]">
        {testimonials.map((i) => (
          <div key={i.id} className="bg-black/30 px-7 py-4 rounded">
            <p className="pb-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </p>
            <p className="pb-4 text-sm font-serif text-white">{i.text}</p>
            <p className="pb-4 text-lg font-serif text-white font-bold">
              {i.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
