import Link from "next/link";

export default function nav() {
  return (
    <nav className="min-w-screen flex justify-between">
      <div className="px-5 py-2">
        <h1 className="text-4xl">Julius Rene</h1>
        <h3>Actor & Instrumentalist</h3>
      </div>
      <ul className="flex flex-row justify-end space-x-5 items-center">
        <li className="flex align-middle">
          <Link href="/Gallery">Gallery</Link>
        </li>
        <li className="flex align-middle">
          <Link href="/Showreel">Showreel</Link>
        </li>
        <li className="flex align-middle">
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
