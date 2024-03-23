import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between align-middle content-center h-16 w-screen text-white bg-black sticky top-0">
      <Link href="/" className="text-3xl m-1 p-2 pl-3 justify-center">Mechanized Viking</Link>
        <div className="flex m-4 p-1 content-center h-auto gap-10">
          <Link href="/">Home</Link>
          <Link href="/games">Games</Link>
          <Link href="/web-dev">Web Dev</Link>
          <Link href="/art">Art</Link>
          <Link href="/music">Music</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/misc" className="pr-3">Misc</Link>
        </div>
      </div>
    );
}