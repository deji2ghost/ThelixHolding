import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface dataProps{
    data: string[]
}

const select = ({data}: dataProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        {
            data.map(item=> (
                <SelectItem value="light">{item}</SelectItem>
            ))
        }
      </SelectContent>
    </Select>
  );
};

export default select;
