"use client";
import FormInput from "@/features/Auth/components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import router from "next/router";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateNewOrderInput,
  createNewOrderSchema,
} from "../../RecentOrders/schema/newOrderForm.schema";

export const CreateNewProduct = () => {
  const methods = useForm<CreateNewOrderInput>({
    resolver: zodResolver(createNewOrderSchema),
    defaultValues: {
      orderLines: [
        {
          productName: "",
          productCategory: "",
          quantity: 0,
          unit: "",
        },
      ],
    },
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateNewOrderInput> = async (
    values
  ) => {
    console.log(values);
    router.push("orders/new/confirm");
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
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col justify-center w-[80%] py-1">
          <div className="px-4 py-1">
            <label htmlFor={"supplier"} className="py-1 text-xl text-blue-600">
              Item Name
            </label>
            <div className="my-2">
              <input
                type="text"
                className="w-60 px-4 py-4 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...register("supplier")}
              />
              {!!errors["supplier"]?.message?.toString() && (
                <p className="mt-1 text-sm text-red-700">
                  {errors["supplier"].message}
                </p>
              )}
            </div>
          </div>
          <div className="px-4 py-1">
            <label htmlFor={"supplier"} className="py-1 text-xl text-blue-600">
              Item Name
            </label>
            <div className="my-2">
              <input
                type="text"
                className="w-60 px-4 py-4 text-sm font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg shadow-sm form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...register("supplier")}
              />
              {!!errors["supplier"]?.message?.toString() && (
                <p className="mt-1 text-sm text-red-700">
                  {errors["supplier"].message}
                </p>
              )}
            </div>
          </div>
          <div className="py-4 flex justify-between">
            <div className="w-[45%] py-1">
              <p className="border-b-2 border-gray-100 font-bold">
                Sales Information
              </p>
            </div>
            <div className="w-[45%] py-1">
              <p className="border-b-2 border-gray-100 font-bold">
                Purchase Infomation
              </p>
            </div>
          </div>
          <div className="py-4">
            <p className="py-1 border-b-2 border-gray-100 font-bold">
              Track Inventory
            </p>
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
    </div>
  );
};
