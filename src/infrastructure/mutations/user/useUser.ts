import { signInUser } from "@/infrastructure/services/http/user";
import { useMutation } from "@tanstack/vue-query";

export const useGetUser = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInUser({ email, password }),
    onSuccess: (data) => console.log(data),
  });
};
