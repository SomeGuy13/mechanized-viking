export default function NavBar() {
  return (
    <div className="flex justify-between align-middle content-center h-16 w-screen text-white bg-black sticky top-0">
      <h1 className="text-3xl m-1 p-2 pl-3 justify-center">Mechanized Viking</h1>
        <div className="flex m-4 p-1 content-center h-auto gap-10">
          <div>Home</div>
          <div>Games</div>
          <div>Web Dev</div>
          <div>Art</div>
          <div>Music</div>
          <div>Learn</div>
          <div className="pr-3">Misc</div>
        </div>
      </div>
    );
}