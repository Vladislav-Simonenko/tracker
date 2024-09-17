"use client";

import React, { FC } from "react";
import { Formik } from "formik";
import { LoginInputs, ButtonLayout } from "@/components";

import styles from "./ChangePass.module.scss";

export const ChangePass: FC = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {({ values, handleChange, handleBlur, handleSubmit }) => (
      <form onSubmit={handleSubmit} className={styles.changePassContainer}>
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
