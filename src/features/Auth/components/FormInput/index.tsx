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
          className="form-control w-full rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-5 text-sm font-normal text-gray-700 shadow-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
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
