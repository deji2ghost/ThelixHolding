import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface dataProps {
  data: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ data, value, onChange }: dataProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full py-1">
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
