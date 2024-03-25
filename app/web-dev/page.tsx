import { WebCardCollection } from "../ui/cardCollections"
import Title from "../ui/title"

export default function WebDev() {
  return (
    <main className="h-screen bg-black text-white">
      <Title title="Web Development"></Title>
      <WebCardCollection />
    </main>
  )
}