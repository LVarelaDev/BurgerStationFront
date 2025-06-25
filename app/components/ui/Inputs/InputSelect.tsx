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
import { Control, FieldValues, Path } from "react-hook-form";

interface InputSelectProps<
  T extends FieldValues,
  K extends Record<string, any>
> {
  dataList: K[];
  itemDisplay: keyof K;
  itemValue: keyof K;
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
}

const InputSelect = <T extends FieldValues, K extends Record<string, any>>({
  control,
  label,
  name,
  placeholder,
  dataList,
  itemDisplay,
  itemValue,
}: InputSelectProps<T, K>) => {
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
