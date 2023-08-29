import Nav from "./Components/Nav";
export default function Home() {
  return (
    <main className="bg-backgroundColor p-10 relative flex min-h-screen h-4/5 flex-col items-center justify-between">
      <Nav
        position="absolute"
        top="30"
        breakpoint="md"
        breakpointValue="md:hidden"
        display="flex"
      />
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed"></section>
    </main>
  );
}
