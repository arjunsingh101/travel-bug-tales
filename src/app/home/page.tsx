import { AditionalFeature } from "./aditionalFeatures";
import { Benefit } from "./benefit";
import { BestTous } from "./bestTours";
import { BookTour } from "./bookTour";
import { GetInTouch } from "./getInTouch";
import { HomeHeroBanner } from "./homeHeroBanner";
import { OurFeatures } from "./ourFeature";
import { Testimonials } from "./testimonials";

export default function Home() {
  return (
    <>
      <HomeHeroBanner />
      <GetInTouch />
      <Benefit />
      <BestTous />
      <OurFeatures />
      <AditionalFeature />
      <Testimonials />
      <BookTour />
    </>
  );
}
