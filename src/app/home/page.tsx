import { Benefit } from "./benefit";
import { GetInTouch } from "./getInTouch";
import { HomeHeroBanner } from "./homeHeroBanner";

export default function Home() {
  return (
    <>
      <HomeHeroBanner />
      <GetInTouch />
      <Benefit />
    </>
  );
}
