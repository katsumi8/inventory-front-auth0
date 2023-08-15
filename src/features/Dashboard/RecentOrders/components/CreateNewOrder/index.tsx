"use client";
import FormInput from "@/features/Auth/components/FormInput";
import Link from "next/link";
import { FormProvider } from "react-hook-form";
import { useOrderForm } from "../../hooks/useOrderForm";

export const CreateNewOrder = () => {
  const { methods, handleSubmit, onSubmitHandler } = useOrderForm();

  return (
    <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg h-[90vh]">
      <div className="py-4">
        <p className="py-1 border-b-2 border-gray-100">New Order</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col items-center justify-center w-[80%] py-1 m-auto">
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
            <div className="flex flex-row-reverse w-full">
              <button
                type="submit"
                className="mx-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                check out
              </button>
              <Link
                href="/orders"
                className="p-3 px-4 mx-2 text-center text-white uppercase bg-gray-400 shadow-xl w-28 shadow-gray-400 rounded-xl hover:text-blue-200"
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
