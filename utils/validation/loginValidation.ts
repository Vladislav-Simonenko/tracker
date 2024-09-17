import * as Yup from "yup";

export interface ILoginValidationSchema {
  email: string;
  password: string;
}

export const loginValidationSchema: Yup.ObjectSchema<ILoginValidationSchema> =
  Yup.object({
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
