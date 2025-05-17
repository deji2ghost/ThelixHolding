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
  placeholder: string
}

const CustomSelect = ({ data, value, onChange, placeholder }: dataProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full py-1">
        <SelectValue placeholder={placeholder} />
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
