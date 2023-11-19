import {
  Navbar,
  Topbar,
  Box,
  Comp,
  Dean,
  Facilities,
  Footer,
  Table,
  CarouselTransition,
  Team,
  Magazine,
} from "../components";

const Placement = () => {
  return (
    <div>
      <div className="fixed z-50">
        <Topbar />
        <Navbar />
      </div>
      <CarouselTransition />
      <Box />
      <Comp />
      <Dean />
      <Facilities />
      <Team />
      <Magazine />
      <Table />
      <Footer />
    </div>
  );
};
export default Placement;
