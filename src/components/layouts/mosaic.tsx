
const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-1",
  large: "col-span-2 row-span-2",
};

const MosaicGrid = ({items}) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4 p-4">
      {items?.map((item) => (
        <div
          key={item.id}
          className={`relative bg-gray-200 rounded-xl overflow-hidden shadow ${sizeClasses[item.size] || "col-span-1 row-span-1"}`}
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 text-sm">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MosaicGrid;