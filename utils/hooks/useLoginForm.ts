import {
  LoginUserDto,
  useAppDispatch,
  useAuthControllerLoginMutation,
} from "@/lib";
import { login } from "@/lib/store/auth";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import toast from "react-hot-toast";
import * as Yup from "yup";

export type TUseLoginForm = {
  initialFormValues: LoginUserDto;
  validationSchema: any;
  onSubmit: (data: LoginUserDto) => Promise<void>;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

export const useLoginForm = (): TUseLoginForm => {
  const [loginRequest, { isLoading, error }] = useAuthControllerLoginMutation();
  const notifyError = (error: any) =>
    toast.error(
      `Что то пошло не так,  ${error?.data?.message || error?.data?.error}`
    );

  const dispatch = useAppDispatch();
  const initialFormValues: LoginUserDto = {
    email: "uswer@example.com",
    password: "password123",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("Электронная почта указана неверно")
      .required("Электронная почта не указана"),
    password: Yup.string()
      .trim()
      .min(5, "Пароль слишком короткий (минимум 5 символов)")
      .max(256, "256 символов достаточно")
      .matches(
        /[a-zA-Z0-9]/,
        "Пароль может содержать только заглавные и строчные буквы латинского алфавита и цивры"
      )
      .required("Поле обязательно для заполнения"),
  });
  //FIXME: data:LoginUserDto
  const onSubmit = async (data: LoginUserDto) => {
    try {
      const jwtResponse = await loginRequest({ loginUserDto: data }).unwrap(); // Wrap data here
      if (jwtResponse) {
        dispatch(login(jwtResponse));
      }
    } catch (error) {
      notifyError(error);
      console.error(error);
    }
  };

  return {
    initialFormValues,
    validationSchema,
    onSubmit,
    isLoading,
    error,
  };
};
