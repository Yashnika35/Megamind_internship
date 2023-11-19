import { Carousel } from "@material-tailwind/react";

const CarouselTransition = () => {
  return (
    <Carousel loop="loop" autoplay className="rounded-xl pt-[6.9rem]">
      <img
        src="./img/coroussel/PlacementBanner2023-1.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
      <img
        src="./img/coroussel/PlacementBanner2023-2.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
      <img
        src="./img/coroussel/PlacementLandingPageBanner6.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
      <img
        src="./img/coroussel/PlacementLandingPageBanner3.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
      <img
        src="./img/coroussel/PlacementLandingPageBanner4.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
      <img
        src="./img/coroussel/PlacementLandingPageBanner5.jpg"
        alt="placement"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};
export default CarouselTransition;
