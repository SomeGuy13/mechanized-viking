import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({
  title,
  href,
}: {
  title: string, 
  href: string,
}) {
  return (
    <Link href={href}>
        <div className="sm:w-64 sm:h-64 w-32 h-32 m-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="sm:text-lg text-md font-bold sm:p-5 p-3 pt-4/5">{title}</h1>
      </div>
    </Link>
  )
}

export function ContentCard({
  title,
  href,
  imgSrc,
  imgAlt,
}: {
  title: string,
  href: string,
  imgSrc: string,
  imgAlt: string,
}) {
  return (
    <Link href={href}>
      <div className="sm:w-64 sm:h-64 w-32 h-32 m-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="sm:text-lg text-md font-bold sm:p-5 p-3 pt-4/5 absolute z-10">{title}</h1>
          <Image className='bg-black rounded-2xl w-full h-full object-cover relative' src={imgSrc} alt={imgAlt} width={1000} height={256} />
      </div>
    </Link>
  )
}