"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface InputTextProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  typeField?: HTMLInputTypeAttribute;
}

const InputText = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  typeField,
}: InputTextProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type={typeField}
              placeholder={placeholder}
              {...field}
              value={field.value || ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputText;
