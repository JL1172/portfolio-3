import { createContext } from "react";
import { InitialStateContactFormType } from "../hooks/useForm";

type ContactFormContextType = {
    changeHandler: (name: string, value: string | boolean) => void;
    submitForm: () => void;
    formData: InitialStateContactFormType;
}
export const ContactFormContext = createContext<ContactFormContextType | null>(null);