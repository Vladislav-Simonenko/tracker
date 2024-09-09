"use client";

import React from "react";
import { Formik } from "formik";
import { RegisterInputs } from "@/components/molecules";
import { ButtonLayout } from "@/components/atoms";
import styles from "./RegisterForm.module.scss";

export const RegisterForm: React.FC = () => (
  <Formik
    initialValues={{
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
    }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
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
        <ButtonLayout text="Регистрация" type="submit" />
      </form>
    )}
  </Formik>
);
