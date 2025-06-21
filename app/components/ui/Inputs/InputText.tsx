"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Control, FieldValues } from "react-hook-form";

interface InputTextProps {
  control: Control<any, any, any>;
  name: string;
  label: string;
  placeholder?: string;
  typeField?: HTMLInputTypeAttribute;
}

const InputText = ({
  control,
  name,
  label,
  placeholder,
  typeField,
}: InputTextProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={typeField} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputText;
