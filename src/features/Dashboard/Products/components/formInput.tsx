import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  required: boolean;
  type: string;
};

function FormInput({
  label,
  name,
  type = "text",
  required = false,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorText = errors[name]?.message?.toString();

  return (
    <div className="px-4 py-1">
      <label htmlFor={name} className="py-1 text-xl text-blue-600">
        {label}
        {required && <span className="text-red-500 px-1">*</span>}
      </label>
      <div className="my-2">
        <input
          type={type}
          className="w-60 px-4 py-4 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          {...register(name)}
        />
        {!!errorText && (
          <p className="mt-1 text-sm text-red-700">{errorText}</p>
        )}
      </div>
    </div>
  );
}

export default FormInput;
