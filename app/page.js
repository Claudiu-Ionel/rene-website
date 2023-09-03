import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
export const metadata = {
  title: "Rene",
  description: "Test test test",
};
export default function Home() {
  return (
    <>
      <section className="bg-hero-image w-full h-[905px] bg-cover bg-no-repeat bg-fixed"></section>
      <Gallery />
      <Experience />
    </>
  );
}
