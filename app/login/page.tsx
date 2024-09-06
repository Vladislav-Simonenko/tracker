"use client";

import React from "react";
import styles from "./login.module.scss";
import { ButtonLayout, LoginInputs, Logo } from "@/components";
import { Formik } from "formik";

export default function login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginModal}>
        <div className={styles.loginModalHeader}>
          <Logo />
        </div>
        <div className={styles.diagonalLine}></div>
        <Formik
          initialValues={{ email: "", pass: "" }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className={styles.loginModalMain}>
              <LoginInputs
                onChange={handleChange}
                onBlur={handleBlur}
                value={values}
                name={{ email: "email", password: "pass" }}
              />
              <ButtonLayout text={"Вход"} type={"submit"} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
