import CategoryCard from "./cards";
import { ContentCard } from "./cards";

export default function CategoryCardCollection() {
  return (
    <div className="flex flex-wrap justify-center margin-1/12 bg-black">
      <CategoryCard title="Games" href="/games" />
      <CategoryCard title="Web Development" href="/web-dev" />
      <CategoryCard title="Art" href="/art" />
      <CategoryCard title="Learn" href="/learn" />
      <CategoryCard title="Miscelaneous" href="/misc" />
      <CategoryCard title="Music" href="/music" />
    </div>
  );
}

export function GameCardCollection() {
  return (
    <div className="flex flex-wrap justify-center margin-1/12 bg-black">
      <ContentCard title="Laser Defender" href="https://sharemygame.com/@ScreamingGoat/laser-defender" />
    </div>
  )
}