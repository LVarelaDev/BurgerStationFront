import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

interface InputTextProps {
  dataList: any[];
  itemDisplay: string;
  itemValue: string;
  control: Control<any, any, any>;
  name: string;
  label: string;
  placeholder?: string;
}

const InputSelect = ({
  control,
  label,
  name,
  placeholder,
  dataList,
  itemDisplay,
  itemValue,
}: InputTextProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="w-full">
              {dataList.map((item) => (
                <SelectItem key={item[itemValue]} value={item[itemValue]}>
                  {item[itemDisplay]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSelect;
