export default function CategoryCard({
  title,
}: {
  title: string, 
}) {
  return (
    <div className="w-64 h-64 m-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-lg font-bold p-5 pt-48">{title}</h1>
    </div>
  )
}