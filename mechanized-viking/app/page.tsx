import CategoryCardCollection from "./ui/cardCollections";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white font-sans">
      <div className="flex flex-row justify-center items-center w-screen h-48 bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="flex flex-col sm:items-center">
          <h1 className="sm:text-6xl text-4xl p-1">Mechanized Viking</h1>
          <p className="p-1">I&apos;m an independent game developer, who is passionate about anything with game development and programming.</p>
        </div>
      </div>
      <CategoryCardCollection />
      <div className="sm:p-6 p-1">
        <h1 className="sm:text-3xl  text-2xl">Recent Updates</h1>
        <p>Making this website!</p>
      </div>
    </main>
  );
}
