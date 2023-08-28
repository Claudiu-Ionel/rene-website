import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15 bg-white">
      <Image
        src="/Julius.jpg"
        width="500"
        height="500"
        alt="picture of Julius Rene"
        objectFit="cover"
      />
    </main>
  );
}
