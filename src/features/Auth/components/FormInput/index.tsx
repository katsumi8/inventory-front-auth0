import React from "react";
import { useFormContext } from "react-hook-form";

type FormInputProps = {
  label?: string;
  name: string;
  placeholder: string;
  type: string;
};

function FormInput({ label, name, type, placeholder }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorText = errors[name]?.message?.toString();

  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="py-3 text-2xl text-blue-600">
          {label}
        </label>
      )}
      <div className="my-4">
        <input
          type={type}
          className="w-full px-4 py-5 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder={placeholder}
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
