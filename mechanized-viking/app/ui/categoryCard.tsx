import Link from 'next/link';

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