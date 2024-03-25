import { ArtCardCollection } from "../ui/cardCollections"
import Title from "../ui/title"

export default function Art() {
  return (
    <main className="h-screen bg-black text-white">
      <Title title="Art"></Title>
      <ArtCardCollection />
    </main>
  )
}