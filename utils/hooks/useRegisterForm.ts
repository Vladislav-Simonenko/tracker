import {
  RegisterUserDto,
  useAppDispatch,
  useAuthControllerRegisterMutation,
} from "@/lib";
import { login } from "@/lib/store/auth";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
  IRegisterValidationSchema,
  registerValidationSchema,
} from "../validation";
import { ObjectSchema } from "yup";
import { toastNotify } from "..";

export type TUseRegisterForm = {
  initialFormValues: RegisterUserDto;
  validationSchema: ObjectSchema<IRegisterValidationSchema>;
  onSubmit: (data: RegisterUserDto) => Promise<void>;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useRegisterForm = (): TUseRegisterForm => {
  const [loginRequest, { isLoading, error }] =
    useAuthControllerRegisterMutation();

  const dispatch = useAppDispatch();
  const initialFormValues: RegisterUserDto = {
    email: "uswer@example.com",
    password: "password123",
    confirmPassword: "password123",
    login: "test123",
  };

  const onSubmit = async (data: RegisterUserDto) => {
    try {
      const jwtResponse = await loginRequest({
        registerUserDto: data,
      }).unwrap();

      if (jwtResponse) {
        dispatch(login(jwtResponse));
      }

      toastNotify({
        toastType: "success",
        error: null,
        message: "Успешная регистация",
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
    validationSchema: registerValidationSchema,
    onSubmit,
    isLoading,
    error,
  };
};
