import * as Yup from "yup";

export interface IRegisterValidationSchema {
  email: string;
  password: string;
  confirmPassword: string;
  login: string;
}

export const registerValidationSchema: Yup.ObjectSchema<IRegisterValidationSchema> =
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли должны совпадать")
      .required("Поле обязательно для заполнения"),
    login: Yup.string()
      .trim()
      .min(2, "Слишком короткий")
      .max(50, "Слишком длинный")
      .required("Логин не указан"),
  });
