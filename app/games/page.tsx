import { GameCardCollection } from "../ui/cardCollections"
import Title from "../ui/title"

export default function Games() {
  return (
    <main className="h-screen bg-black text-white">
      <Title title="Games"></Title>
      <h1 className="text-center text-red-500 text-xl font-bold p-3">More comming soon!</h1>
      <GameCardCollection />
    </main>
  )
}