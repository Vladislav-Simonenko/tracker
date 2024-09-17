import {
  LoginUserDto,
  useAppDispatch,
  useAuthControllerLoginMutation,
} from "@/lib";
import { login } from "@/lib/store/auth";
import { ObjectSchema } from "yup";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ILoginValidationSchema, loginValidationSchema, toastNotify } from "..";

export type TUseLoginForm = {
  initialFormValues: LoginUserDto;
  validationSchema: ObjectSchema<ILoginValidationSchema>;
  onSubmit: (data: LoginUserDto) => Promise<void>;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useLoginForm = (): TUseLoginForm => {
  const [loginRequest, { isLoading, error }] = useAuthControllerLoginMutation();

  const dispatch = useAppDispatch();
  const initialFormValues: LoginUserDto = {
    email: "uswer@example.com",
    password: "password123",
  };

  const onSubmit = async (data: LoginUserDto) => {
    try {
      const jwtResponse = await loginRequest({ loginUserDto: data }).unwrap();

      if (jwtResponse) {
        dispatch(login(jwtResponse));
      }

      toastNotify({
        toastType: "success",
        error: null,
        message: "Успешный вход",
      });
    } catch (error: any) {
      toastNotify({
        toastType: "error",
        error: error,
      });
      console.error(error);
    }
  };

  return {
    initialFormValues,
    validationSchema: loginValidationSchema,
    onSubmit,
    isLoading,
    error,
  };
};
