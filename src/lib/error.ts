import { AxiosError } from "axios";
import { toast } from "sonner";

export const throwError = (error: unknown) => {
   if (error instanceof AxiosError) {
      const errorMessage =
         error.response?.data?.message ||
         "Something went wrong, try again later";

      if (error.response?.data?.statusCode === 401) {
         window.location.replace("/login");

         return {
            statusCode: error.response?.data?.statusCode || null,
            status: false,
            message: errorMessage,
         };
      }

      toast(errorMessage)
      return {
         statusCode: error.response?.data?.statusCode || null,
         status: false,
         message: errorMessage,
      };
   } else {
      toast("An unexpected error occurred");
      return {
         statusCode: null,
         status: false,
         message: "An unexpected error occurred",
      };
   }
};
