import { FieldError, useFormContext } from "react-hook-form";

type FormInputProps = {
  name: string;
  placeholder?: string;
  type: string;
  error: FieldError | undefined;
};

export const FormInputArray = ({
  type,
  placeholder,
  name,
  error,
}: FormInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="my-2">
      <input
        className="w-full px-4 py-5 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {!!error?.message && (
        <p className="mt-1 text-sm text-red-700">{error.message}</p>
      )}
    </div>
  );
};
