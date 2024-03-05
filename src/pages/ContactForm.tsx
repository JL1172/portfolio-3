import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ContactFormButton from "../components/ContactFormButton";
import ContactFormTextFields from "../components/ContactFormTextFields";
import { initialState, useForm } from "../hooks/useForm";
import { ContactFormContext } from "../contexts/ContactFormContext";
import { instantiate_schema } from "../services/formspree-endpoint";

export default function ContactSection() {
  const ctx = useContext(GlobalContext);
  const [formData, changeHandler, submitForm] = useForm(
    "contact_state",
    initialState
  );
  useEffect(() => {
    instantiate_schema();
  }, []);
  return (
    <ContactFormContext.Provider
      value={{ formData, changeHandler, submitForm }}
    >
      <div
        id="contact"
        className={`text-white text-4xl flex bg-custom-main outline-custom-main m-h-80dvh h-fit w-full mt-10 flex-col items-center justify-evenly ${
          ctx?.isDim ? "brightness-25" : "brightness-100"
        }`}
      >
        <div className="font-bold text-4xl mt-10 mb-10">CONTACT ME</div>
        <form className="border-2 border-white w-11/12 min-h-dvh h-fit flex flex-col justify-evenly items-center">
          <ContactFormTextFields />
          <ContactFormButton />
        </form>
      </div>
    </ContactFormContext.Provider>
  );
}
