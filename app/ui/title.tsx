export default function Title({title}:{title: string}) {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-48 bg-gradient-to-b from-cyan-500 to-blue-500">
      <div className="flex flex-col sm:items-center">
          <h1 className="sm:text-6xl text-4xl p-1">{title}</h1>
      </div>
    </div>
  )
}