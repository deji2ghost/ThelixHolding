import { Skeleton } from "../ui/skeleton";

const CustomSkeleton = () => {
  const skeletonCount = 4;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <Skeleton className="h-[150px] w-[250px] rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default CustomSkeleton;
