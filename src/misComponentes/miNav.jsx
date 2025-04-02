import Link from "next/link";

export default function MiNav() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/ejemplo" className="text-white hover:text-gray-400">
            Ejemplo
          </Link>
        </li>
        <li>
          <Link
            href="/ejemplo/otro-ejemplo"
            className="text-white hover:text-gray-400"
          >
            Otro Ejemplo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
