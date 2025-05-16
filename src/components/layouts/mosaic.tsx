import type { Product } from "@/lib/types";
import Card from "../ui/card";

// const sizeClasses = {
//   small: "col-span-1 row-span-1",
//   medium: "col-span-2 row-span-1",
//   large: "col-span-2 row-span-2",
// };

interface mosaicGridProps{
  items: Product[]
}

const MosaicGrid = ({items}:mosaicGridProps) => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] gap-4 p-4">
      {items?.map((item) => (
        <Card key={item.id} imageUrl={item.imageUrl} name={item.name}/>
      ))}
    </div>
  );
};

export default MosaicGrid;