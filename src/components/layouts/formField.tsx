import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { UseFormRegister, FieldValues, RegisterOptions, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
   register?: UseFormRegister<T>;
  validationRules?: RegisterOptions<T, Path<T>>;
  error?: { message?: string };
  type?: string;
  step?: string;
  className?: string;
  placeholder?: string;
  min?: string;
  inputClassName?: string;
  ariaInvalid?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  accept?: string;
  isFileInput?: boolean;
  value?: string | number;
}

const FormField= <T extends FieldValues> ({
  id,
  label,
  register,
  validationRules,
  error,
  type = "text",
  step,
  className = "",
  inputClassName = "col-span-3 w-full",
  ariaInvalid = false,
  onChange,
  placeholder,
  accept,
  isFileInput = false,
  min
}: FormFieldProps<T>) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <Label htmlFor={id} className="text-right py-1">
        {label}
      </Label>

      {isFileInput ? (
        <Input
          id={id}
          type="file"
          accept={accept}
          onChange={onChange}
          className={inputClassName + " border px-2 py-1 rounded-md w-full"}
        />
      ) : (
        <Input
          id={id}
          type={type}
          step={step}
          min={min}
          placeholder={placeholder}
          {...(register ? register(id, validationRules) : {})}
          className={inputClassName}
          aria-invalid={ariaInvalid}
        />
      )}

      {error && (
        <p className="col-span-4 text-red text-sm">{error.message}</p>
      )}
    </div>
  );
};

export default FormField;
