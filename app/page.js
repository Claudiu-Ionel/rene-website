import Nav from "./Components/Nav";
import Experience from "./Components/Experience";
export default function Home() {
  return (
    <>
      <Nav
        position="absolute"
        top="30"
        breakpoint="md"
        breakpointValue="md:hidden"
        display="flex"
      />
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed"></section>
      <Experience />
    </>
  );
}
