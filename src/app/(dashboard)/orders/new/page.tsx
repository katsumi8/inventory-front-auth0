"use client";
import {
  CreateNewOrderInput,
  createNewOrderSchema,
} from "@/features/Dashboard/RecentOrders/schema/newOrderForm.schema";
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import FormInput from "@/features/Auth/components/FormInput";
import { FormInputArray } from "@/features/Dashboard/RecentOrders/components/formInputArray";

function NewOrderPage() {
  const [formLines, setFormLines] = useState([0]);

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
    register,
    formState: { isSubmitSuccessful, errors },
    control,
  } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "orderLines",
  });

  const handleAddItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    append({
      productName: "",
      productCategory: "",
      quantity: 0,
      unit: "",
    });
  };
  const onSubmitHandler: SubmitHandler<CreateNewOrderInput> = async (
    values
  ) => {
    console.log(values);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
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
                  <FormInputArray
                    name={`orderLines.${index}.productName`}
                    type="text"
                    error={errors.orderLines?.[index]?.productName}
                  />
                  <FormInputArray
                    name={`orderLines.${index}.productCategory`}
                    type="text"
                    // placeholder={""}
                    error={errors.orderLines?.[index]?.productCategory}
                  />
                  <FormInputArray
                    name={`orderLines.${index}.quantity`}
                    type="number"
                    // placeholder={""}
                    error={errors.orderLines?.[index]?.quantity}
                  />
                  <FormInputArray
                    name={`orderLines.${index}.unit`}
                    type="text"
                    placeholder={"kg / l / pieces"}
                    error={errors.orderLines?.[index]?.unit}
                  />
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
}

export default NewOrderPage;
