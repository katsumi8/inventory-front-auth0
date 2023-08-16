"use client";
import FormInput from "@/features/Auth/components/FormInput";
import Link from "next/link";
import { FormProvider } from "react-hook-form";
import { useOrderForm } from "../../hooks/useOrderForm";

export const CreateNewOrder = () => {
  const { methods, handleSubmit, onSubmitHandler } = useOrderForm();

  return (
    <div className="m-auto h-[90vh] w-full overflow-y-auto rounded-lg bg-white p-4">
      <div className="py-4">
        <p className="border-b-2 border-gray-100 py-1">New Order</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="m-auto flex w-[80%] flex-col items-center justify-center py-1">
            <div className="flex w-full">
              <div className="w-full px-4">
                <FormInput
                  name="supplier"
                  type="text"
                  label="Supplier"
                  placeholder={""}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full px-4">
                <FormInput
                  name="productName"
                  type="text"
                  label="Product Name"
                  placeholder={""}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full px-4">
                <FormInput
                  name="quantity"
                  type="number"
                  label="Quantity"
                  placeholder={""}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full px-4">
                <FormInput
                  name="additionalNotes"
                  type="textarea"
                  label="Notes"
                  placeholder={""}
                />
              </div>
            </div>
            <div className="flex w-full flex-row-reverse">
              <button
                type="submit"
                className="mx-2 rounded-xl bg-gradient-to-r from-[#5651e5] to-[#709dff] p-3 px-4 uppercase text-white shadow-xl shadow-gray-400 hover:text-blue-200"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                check out
              </button>
              <Link
                href="/orders"
                className="mx-2 w-28 rounded-xl bg-gray-400 p-3 px-4 text-center uppercase text-white shadow-xl shadow-gray-400 hover:text-blue-200"
              >
                {"< Back"}
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
