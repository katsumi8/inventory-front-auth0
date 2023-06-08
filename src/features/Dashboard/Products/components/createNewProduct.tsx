"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CreateNewProductInput, createNewProductSchema } from "../schema";
import FormInput from "./formInput";

export const CreateNewProduct = () => {
  const router = useRouter();
  const methods = useForm<CreateNewProductInput>({
    resolver: zodResolver(createNewProductSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateNewProductInput> = async (
    values
  ) => {
    console.log(values);
    router.push("/products");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg h-[90vh]">
      <div className="py-4">
        <p className="py-1 border-b-2 border-gray-100 font-bold">Item Info</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="flex flex-col justify-center w-[80%] py-1">
            <FormInput
              label={"Item Name"}
              name={"itemName"}
              required={true}
              type={"text"}
            />
            <FormInput
              label={"Item Category"}
              name={"itemCategory"}
              required={true}
              type={"text"}
            />
            <FormInput
              label={"Stock Keeping Unit"}
              name={"stockKeepingUnit"}
              required={true}
              type={"text"}
            />
            <FormInput
              label={"Unit"}
              name={"unit"}
              required={true}
              type={"text"}
            />
            <FormInput
              label={"Universal Product Code"}
              name={"universalProductCode"}
              required={false}
              type={"text"}
            />
            <FormInput
              label={"Manufacturer"}
              name={"manufacturer"}
              required={false}
              type={"text"}
            />
            <div className="py-4 flex justify-between">
              <div className="w-[45%] py-1">
                <p className="border-b-2 border-gray-100 font-bold mb-2">
                  Sales Information
                </p>
                <FormInput
                  label={"Sales Price"}
                  name={"salesPrice"}
                  required={true}
                  type={"text"}
                />
                <FormInput
                  label={"Sales Account"}
                  name={"salesAccount"}
                  required={true}
                  type={"text"}
                />
                <FormInput
                  label={"Sales Description"}
                  name={"salesDescription"}
                  required={false}
                  type={"text"}
                />
              </div>
              <div className="w-[45%] py-1">
                <p className="border-b-2 border-gray-100 font-bold mb-2">
                  Purchase Infomation
                </p>
                <FormInput
                  label={"Purchase Price"}
                  name={"purchasePrice"}
                  required={true}
                  type={"text"}
                />
                <FormInput
                  label={"Purchase Account"}
                  name={"purchaseAccount"}
                  required={true}
                  type={"text"}
                />
                <FormInput
                  label={"Purchase Description"}
                  name={"purchaseDescription"}
                  required={false}
                  type={"text"}
                />
              </div>
            </div>
            <div className="py-4">
              <p className="py-1 border-b-2 border-gray-100 font-bold mb-2">
                Track Inventory
              </p>
              <FormInput
                label={"Opening Stock Value"}
                name={"openingStockValue"}
                required={false}
                type={"text"}
              />
              <FormInput
                label={"Reorder Value"}
                name={"reorderValue"}
                required={false}
                type={"text"}
              />
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="w-28 mx-2 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Save
              </button>
              <Link
                href="/products"
                className="w-28 p-3 px-4 mx-2 text-center text-white uppercase bg-gray-400 shadow-xl shadow-gray-400 rounded-xl hover:text-blue-200"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
