import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  validationRules?: object;
  error?: { message?: string };
  type?: string;
  step?: string;
  className?: string;
  inputClassName?: string;
  ariaInvalid?: boolean | string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>; // For file inputs or custom handlers
  accept?: string; // For file input accept types
  isFileInput?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

const FormField: React.FC<FormFieldProps> = ({
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
  accept,
  isFileInput = false,
  value,
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 items-start ${className}`}>
      <Label htmlFor={id} className="text-right py-1">
        {label}
      </Label>

      {isFileInput ? (
        <input
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
          {...register(id, validationRules)}
          className={inputClassName}
          aria-invalid={ariaInvalid}
          value={value}
        />
      )}

      {error && (
        <p className="col-span-4 text-red-600 text-sm">{error.message}</p>
      )}
    </div>
  );
};

export default FormField;
