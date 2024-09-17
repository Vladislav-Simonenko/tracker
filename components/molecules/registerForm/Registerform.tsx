"use client";

import React, { FC } from "react";
import { Formik } from "formik";
import { RegisterInputs } from "@/components/molecules";
import { ButtonLayout } from "@/components/atoms";
import { useRegisterForm } from "@/utils";

import styles from "./RegisterForm.module.scss";

export const RegisterForm: FC = () => {
  const { initialFormValues, onSubmit, validationSchema, isLoading } =
    useRegisterForm();

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.loginModalMain}>
          <RegisterInputs
            onChange={handleChange}
            onBlur={handleBlur}
            value={values}
            name={{
              email: "email",
              login: "login",
              password: "password",
              confirmPassword: "confirmPassword",
            }}
          />
          <ButtonLayout text="Регистрация" type="submit" disabled={isLoading} />
        </form>
      )}
    </Formik>
  );
};
