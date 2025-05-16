interface cardProps{
    imageUrl: string, 
    name: string
}

const Card = ({imageUrl, name}: cardProps) => {
  return (
    <div
          className={`relative bg-mainBackground shadow-md rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 md:hover:scale-105 ${"col-span-1 row-span-1"}`}
        >
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 text-sm">
            {name}
          </div>
        </div>
  )
}

export default Card
