import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ContactFormButton from "../components/ContactFormButton";
import ContactFormTextFields from "../components/ContactFormTextFields";
import { initialState, useForm } from "../hooks/useForm";
import { ContactFormContext } from "../contexts/ContactFormContext";
import { instantiate_schema } from "../schema/contact-form-schema";
import { Box, LinearProgress } from "@mui/material";
import ContactFormSocials from "../components/ContactFormSocials";

export default function ContactSection() {
  const ctx = useContext(GlobalContext);
  const [formData, changeHandler, submitForm] = useForm(initialState);
  useEffect(() => {
    instantiate_schema();
  }, []);
  return (
    <ContactFormContext.Provider
      value={{ formData, changeHandler, submitForm }}
    >
      {formData.spinnerOn && (
        <Box sx={{ position: "fixed", top: 0, width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <div
        id="contact"
        className={`text-white text-4xl flex bg-custom-main outline-custom-main m-h-80dvh h-fit w-full mt-10 flex-col items-center justify-evenly ${
          ctx?.isDim ? "brightness-25" : "brightness-100"
        }`}
      >
        <div className="font-bold text-4xl mt-10 mb-10">CONTACT ME</div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-11/12 m-h-80dvh h-fit flex flex-col justify-evenly items-center"
        >
          <ContactFormTextFields />
          <ContactFormButton />
          <ContactFormSocials />
        </form>
      </div>
    </ContactFormContext.Provider>
  );
}
