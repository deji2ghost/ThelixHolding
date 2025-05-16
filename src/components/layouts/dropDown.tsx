import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { DropdownProps } from "@/lib/types";

const DropDown: React.FC<DropdownProps> = ({ selectedCategory, data, changeCategory }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {selectedCategory ? selectedCategory : "All"}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data.map((item: string) => (
          <DropdownMenuItem onClick={() => changeCategory(item)} key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
