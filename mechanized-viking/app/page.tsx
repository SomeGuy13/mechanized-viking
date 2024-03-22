import CategoryCard from "./ui/categoryCard";

export default function Home() {
  return (
    <main className="h-screen bg-black text-white font-sans">
      <div className="flex flex-row justify-center items-center w-screen h-48 bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl p-1">Mechanized Viking</h1>
          <p className="p-1">I&apos;m an independent game developer, who is passionate about anything with game development and programming.</p>
        </div>
      </div>
      <div className="flex flex-wrap space-between-5 w-1/2 p-1/5 pt-10 m-auto">
        <CategoryCard title="Games" />
        <CategoryCard title="Web Development" />
        <CategoryCard title="Art" />
        <CategoryCard title="Learn" />
        <CategoryCard title="Miscelaneous" />
        <CategoryCard title="Music" />
      </div>
    </main>
  );
}
