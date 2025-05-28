import { AditionalFeature } from "./aditionalFeatures";
import { Benefit } from "./benefit";
import { GetInTouch } from "./getInTouch";
import { HomeHeroBanner } from "./homeHeroBanner";
import { OurFeatures } from "./ourFeature";

export default function Home() {
  return (
    <>
      <HomeHeroBanner />
      <GetInTouch />
      <Benefit />
      <OurFeatures />
      <AditionalFeature />
    </>
  );
}
