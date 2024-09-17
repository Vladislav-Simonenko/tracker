import toast from "react-hot-toast";

interface IToastyNotify {
  toastType: "error" | "success" | "loading";
  error?: { data: { message: string; error: string } } | null;
  message?: string;
}

export const toastNotify = (props: IToastyNotify) => {
  const { toastType, error, message } = props;
  const errorMessage = `Что-то пошло не так, ${
    error?.data?.message || error?.data?.error
  }`;

  const successMessage = `${message}`;

  const loadingMessage = "Загрузка";

  switch (toastType) {
    case "success":
      return toast.success(successMessage);
    case "error":
      return toast.error(errorMessage);
    case "loading":
      return toast.loading(loadingMessage);
    default:
      return;
  }
};
