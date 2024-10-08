// Hooks
import { useState } from "react";

// Environment
import { BASE_URL } from "@/Utils/enviroment";
import { observer } from "@/Utils/observer";

// Types
type TParams = Record<string, string>;

type THTTPMethods = "GET" | "POST" | "PUT" | "DELETE";
interface IUseApiParams extends RequestInit {
  method: THTTPMethods;
  endpoint: string;
  params?: TParams;
}

export default function useApi() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const serverRequest = async ({ endpoint, ...props }: IUseApiParams) => {
    let data, error;
    try {
      setIsLoading(true);
      const res = await fetch(BASE_URL + endpoint, {
        ...(!!props && props),
      });

      const jsonRes = await res.json();

      if (res.ok) {
        data = jsonRes.data;
      } else {
        throw jsonRes;
      }
    } catch (err) {
      observer.fire("notify", {
        type: "error",
        message: err.message,
      });
      error = err;
    } finally {
      setIsLoading(false);
    }
    return { error, data };
  };

  return { isLoading, serverRequest };
}
