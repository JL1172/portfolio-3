import { useState } from "react";
import { validate_schema } from "../services/formspree-endpoint";

export type InitialStateContactFormType = {
  email: string;
  message: string;
  spinnerOn: boolean;
  emailErrorMessage: string[];
  messageErrorMessage: string[];
};
export const initialState = {
  email: "",
  message: "",
  spinnerOn: false,
  emailErrorMessage: [],
  messageErrorMessage: [],
};

export const useForm = (
  key: string,
  state: InitialStateContactFormType
): [
  InitialStateContactFormType,
  (name: string, value: string | boolean) => void,
  () => void
] => {
  const [formData, setFormData] = useState(state);
  const changeHandler = (name: string, value: string | boolean) => {
    setFormData({ ...formData, [name]: value });
  };
  const submitForm = async () => {
    try {
      setFormData({
        ...formData,
        emailErrorMessage: [],
        messageErrorMessage: [],
      });
      const payload = { message: formData.message, email: formData.email };
      validate_schema(payload);
    } catch (err) {
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
  };
  return [formData, changeHandler, submitForm];
};
