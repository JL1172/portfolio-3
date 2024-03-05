import { useState } from "react";
import { validate_schema } from "../schema/contact-form-schema";
import { submit_form } from "../services/formspree-endpoint";

export type InitialStateContactFormType = {
  email: string;
  message: string;
  spinnerOn: boolean;
  secondarySpinnerOn: boolean;
  emailErrorMessage: string[];
  messageErrorMessage: string[];
};
export const initialState = {
  email: "",
  message: "",
  spinnerOn: false,
  secondarySpinnerOn: false,
  emailErrorMessage: [],
  messageErrorMessage: [],
};

export const useForm = (
  state: InitialStateContactFormType
): [
  InitialStateContactFormType,
  (name: string, value: string | boolean) => void,
  () => void
] => {
  const [formData, setFormData] = useState(state);
  const changeHandler = (name: string, value: string | boolean) => {
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const toggleSpinner = (id: number, bool: boolean, toggleSecond?: boolean) => {
    if (toggleSecond) {
      setFormData((formData) => ({
        ...formData,
        spinnerOn: false,
        secondarySpinnerOn: true,
      }));
      setTimeout(() => {
        setFormData(() => initialState);
      }, 2000);
    } else if (id === 1) {
      setFormData((formData) => ({ ...formData, spinnerOn: bool }));
    }
  };
  const clearMessages = () => {
    setFormData((formData) => ({
      ...formData,
      emailErrorMessage: [],
      messageErrorMessage: [],
    }));
  };
  const submitForm = async () => {
    try {
      //put first spinner on
      toggleSpinner(1, true);
      //clear messages
      clearMessages();
      //create payload
      const payload = { message: formData.message, email: formData.email };
      //validate the schema
      validate_schema(payload);
      //if schema throws no error then send it to formspree
      await submit_form(payload);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(toggleSpinner(1, false, true));
        }, 1000);
      });
      window.localStorage.clear();
    } catch (err) {
      if ((err as Record<string, string>).name === "AxiosError") {
        alert(
          "There Was An Issue With The Form Service. Contact Me Via Another Option Presented Down Below."
        );
      } else {
        //iterate through errors
        //have to declare type here so i can iterate through it
        (err as Record<string, string>[]).forEach((e) => {
          if (e.field === "email") {
            const errors = Object.values(e).slice(1);
            setFormData((formData) => ({
              ...formData,
              emailErrorMessage: errors,
            }));
          } else if (e.field === "message") {
            const errors = Object.values(e).slice(1);
            setFormData((formData) => ({
              ...formData,
              messageErrorMessage: errors,
            }));
          }
        });
      }
    } finally {
      toggleSpinner(1, false);
      toggleSpinner(2, false);
    }
  };
  return [formData, changeHandler, submitForm];
};
