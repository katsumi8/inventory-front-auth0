import { getMeFn } from "@/features/Auth/api/authApi";
import useStore from "@/features/Auth/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export const useGetUser = () => {
  const store = useStore();

  const { data, isLoading } = useQuery(["getMe"], getMeFn, {
    retry: 5,
    select(data) {
      return data;
    },
    onSuccess(data) {
      store.setAuthUser(data);
      store.setRequestLoading(false);
    },
    onError(error: any) {
      store.setRequestLoading(false);
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          console.log("error body: ", error.response.data);
          toast.error(error.response.data.message, {
            position: "top-right",
          });
        }
        console.log("error message: ", error.message);
        toast.error(error.message, {
          position: "top-right",
        });
      } else {
        console.log("unexpected error: ", error);
        toast.error((error as any).response.data.message, {
          position: "top-right",
        });
      }
    },
  });
  const user = store.authUser;

  return { user, isLoading };
};
