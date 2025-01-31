import { requestUserToken } from "@/infrastructure/services/http/user";
import { useQuery } from "@tanstack/vue-query";

export const useFetchRequestToken = () => {
  return useQuery({
    queryKey: ["request-token"],
    queryFn: () => requestUserToken(),
    select: (data) => data.data,
    enabled: false,
    gcTime: 0,
  });
};
