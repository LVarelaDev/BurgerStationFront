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
  TFieldValues extends FieldValues,
  TItem extends object,
  TDisplayKey extends keyof TItem,
  TValueKey extends keyof TItem
> {
  dataList: TItem[];
  itemDisplay: TDisplayKey;
  itemValue: TValueKey;
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
}

const InputSelect = <
  TFieldValues extends FieldValues,
  TItem extends object,
  TDisplayKey extends keyof TItem,
  TValueKey extends keyof TItem
>({
  control,
  label,
  name,
  placeholder,
  dataList,
  itemDisplay,
  itemValue,
}: InputSelectProps<TFieldValues, TItem, TDisplayKey, TValueKey>) => {
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
                <SelectItem
                  key={String(item[itemValue])}
                  value={String(item[itemValue])}
                >
                  {String(item[itemDisplay])}
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
