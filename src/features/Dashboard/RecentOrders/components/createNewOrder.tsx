"use client";
import FormInput from "@/features/Auth/components/FormInput";
import { FormInputArray } from "@/features/Dashboard/RecentOrders/components/formInputArray";
import Link from "next/link";
import { FormProvider } from "react-hook-form";
import { useCreateOrder } from "../hooks/useCreateOrder";

export const CreateNewOrder = () => {
  const {
    methods,
    handleSubmit,
    onSubmitHandler,
    fields,
    errors,
    handleAddItemClick,
    remove,
    products,
    register,
    watch,
  } = useCreateOrder();

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
            <div className="w-full px-4">
              <div className="grid grid-cols-4 gap-4">
                <p className="py-3 text-2xl text-blue-600">Product Name</p>
                <p className="py-3 text-2xl text-blue-600">Category</p>
                <p className="py-3 text-2xl text-blue-600">Quantity</p>
                <p className="py-3 text-2xl text-blue-600">Unit</p>
              </div>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center w-full">
                <div className="grid justify-between w-full grid-cols-4 gap-4 px-4 ">
                  <div className="my-2">
                    <select
                      {...register(`orderLines.${index}.productId`, {})}
                      className="w-full px-4 py-5 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option value="">Select a product</option>
                      {products?.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.itemName}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-sm text-red-700">
                      {errors.orderLines?.[index]?.productId?.message}
                    </p>
                  </div>
                  <div className="my-2">
                    <div className="w-full px-4 py-5 text-sm font-normal text-gray-700 transition ease-in-out bg-white rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      {products?.find(
                        (x) =>
                          x.id ===
                          Number(watch(`orderLines.${index}.productId`))
                      )?.itemCategory ?? "Select a product first"}
                    </div>
                  </div>
                  <FormInputArray
                    name={`orderLines.${index}.quantity`}
                    type="number"
                    error={errors.orderLines?.[index]?.quantity}
                  />
                  <div className="my-2">
                    <div className="w-full px-4 py-5 text-sm font-normal text-gray-700 transition ease-in-out bg-white rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                      {products?.find(
                        (x) =>
                          x.id ===
                          Number(watch(`orderLines.${index}.productId`))
                      )?.unit ?? "Select a product first"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => remove(index)}
                  className="w-10 h-10 px-1 py-1 ml-2 text-white bg-red-500 rounded"
                >
                  X
                </button>
              </div>
            ))}
            <div className="flex w-full px-4 mb-4">
              <button
                onClick={handleAddItemClick}
                className="py-2 text-xl text-blue-800 underline"
              >
                + Add another Item
              </button>
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
