import { logoutUserFn } from "@/features/Auth/api/authApi";
import useStore from "@/features/Auth/store";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const logoutUser = () => {
  const store = useStore();

  const { mutate: logoutUser } = useMutation(() => logoutUserFn(), {
    onMutate(variables) {
      store.setRequestLoading(true);
    },
    onSuccess(data) {
      store.setRequestLoading(false);
      toast.success("Successfully logged out", {
        position: "top-right",
      });
      document.location.href = "/login";
    },
    onError(error: any) {
      store.setRequestLoading(false);
      store.setAuthUser(null);
      document.location.href = "/login";
    },
  });

  const handleLogout = () => {
    logoutUser();
  };

  return { handleLogout };
};
