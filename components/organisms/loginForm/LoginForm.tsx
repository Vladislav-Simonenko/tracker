"use client";

import React, { FC } from "react";
import { Formik } from "formik";
import { LoginInputs, ButtonLayout } from "@/components";
import { useLoginForm } from "@/utils";

import styles from "./LoginForm.module.scss";

export const LoginForm: FC = () => {
  const { initialFormValues, onSubmit, validationSchema, error } =
    useLoginForm();

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.loginModalMain}>
          <LoginInputs
            onChange={handleChange}
            onBlur={handleBlur}
            value={values}
            name={{ email: "email", password: "password" }}
          />
          <ButtonLayout text="Вход" type="submit" />
        </form>
      )}
    </Formik>
  );
};
