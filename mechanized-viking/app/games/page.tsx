import { GameCardCollection } from "../ui/cardCollections"

export default function Games() {
  return (
    <main className="h-screen bg-black text-white">
      <div className="flex flex-row justify-center items-center w-screen h-48 bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="flex flex-col sm:items-center">
          <h1 className="sm:text-6xl text-4xl p-1">Games</h1>
        </div>
      </div>
      <h1 className="text-center text-red-500 text-xl font-bold p-3">More comming soon!</h1>
      <GameCardCollection />
    </main>
  )
}