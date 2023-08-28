import Link from "next/link";

export default function nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/Showreel">Showreel</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
