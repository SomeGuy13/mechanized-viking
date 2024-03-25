import CategoryCard from "./cards";
import { ContentCard } from "./cards";
import Link from "next/link";
import Image from "next/image";

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
    <div className="flex flex-wrap justify-left margin-1/12 bg-black">
      <ContentCard title="Laser Defender" href="https://sharemygame.com/@ScreamingGoat/laser-defender" imgSrc="/content_pictures/games/laser_defender.png" imgAlt="Laser defender start menu" />
    </div>
  )
}

export function WebCardCollection() {
  return (
    <div className="flex flex-wrap justify-left margin-1/12 bg-black">
      <ContentCard title="Random Quote Machine" href="https://codepen.io/Tricky1300/pen/YzjWOxR" imgSrc="/content_pictures/web-dev/random_quote_machine.png" imgAlt="Random Quote Machine" />
      <ContentCard title="Markdown Previewer" href="https://codepen.io/Tricky1300/pen/wvEydNE" imgSrc="/content_pictures/web-dev/markdown_peviewer.png" imgAlt="Markdown Previewer" />
      <ContentCard title="Drum Machine" href="https://59r3yq.csb.app/" imgSrc="/content_pictures/web-dev/drum_machine.png" imgAlt="Drum Machine" />
      <Link href="https://oiwd5t.csb.app/">
        <div className="sm:w-64 sm:h-64 w-32 h-32 m-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="sm:text-lg text-md font-bold sm:p-5 p-3 pt-4/5">Calculator</h1>
          <Image src="/content_pictures/web-dev/calculator.png" alt="Calculator" width={450} height={275} />
          <p className="pl-4 p-1 bold">It takes a bit to load</p>
        </div>
      </Link>
    </div>
  )
}

export function ArtCardCollection() {
  return (
    <div className="flex flex-wrap justify-left margin-1/12 bg-black">
      <ContentCard title="Cherry Grove Night" href="/art" imgSrc="/content_pictures/art/Cherry_Grove_Night.png" imgAlt="Voxel cherry grove" />
      <ContentCard title="Cherry Grove" href="/art" imgSrc="/content_pictures/art/Cherry_Grove.png" imgAlt="Voxel Cherry Grove" />
      <ContentCard title="Crystal Cave" href="/art" imgSrc="/content_pictures/art/Crystal_Cave.png" imgAlt="Voxel Crystal Cave" />
      <ContentCard title="Library" href="/art" imgSrc="/content_pictures/art/library.png" imgAlt="Voxel Library" />
      <ContentCard title="Lighthouse" href="/art" imgSrc="/content_pictures/art/Lighthouse.png" imgAlt="Lighthouse on clifs next to a town" /> 
      <ContentCard title="Lush Cave Chunk" href="/art" imgSrc="/content_pictures/art/Lush_Cave_Chunk.png" imgAlt="Voxel lush cave chunk" />
      <ContentCard title="Lush Cave Dripleaf" href="/art" imgSrc="/content_pictures/art/Lush_Cave_Dripleafs.png" imgAlt="Voxel Dripleaf" />
      <ContentCard title="Orange Gas Giant" href="/art" imgSrc="/content_pictures/art/Orange Gas Giant with Rings Horizonlike shot.png" imgAlt="Orange gas giant with rings" />
      <ContentCard title="Orange Gas Giant" href="/art" imgSrc="/content_pictures/art/Orange Gas Giant with Rings.png" imgAlt="Orange gas giant with rings" />
      <ContentCard title="Orange Gas Giant" href="/art" imgSrc="/content_pictures/art/Orange Gas Giant.png" imgAlt="Orange Gas Giant" />
      <ContentCard title="Red Planet" href="/art" imgSrc="/content_pictures/art/Red Planet Better.png" imgAlt="Red planet" />
      <ContentCard title="Red Planet with Clouds" href="/art" imgSrc="/content_pictures/art/Red Planet.png" imgAlt="Red planet" />
    </div>
  )
}