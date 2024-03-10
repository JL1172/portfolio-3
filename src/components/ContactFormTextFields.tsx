import { Alert } from "@mui/material";
import { useContext, useEffect } from "react";
import { ContactFormContext } from "../contexts/ContactFormContext";
import "../styles/contact.css";

export default function ContactFormTextFields() {
  const ctx = useContext(ContactFormContext);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-field-visible-1");
        }
      });
    });
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("text-field-visible-2");
        }
      });
    });
    const textFieldOne = document.querySelectorAll(".text-field-hidden-1");
    textFieldOne.forEach((element) => observer.observe(element));
    const textFieldTwo = document.querySelectorAll(".text-field-hidden-2");
    textFieldTwo.forEach((element) => observer1.observe(element));
  }, []);
  return (
    <>
      <span className=" xxs:w-11/12 xs:w-3/4 sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 mt-6 flex flex-col items-center mb-6 text-field-hidden-1 ">
        <input
          type="email"
          id="input-one"
          style={{
            backgroundColor: "rgb(51,51,51)",
            height: "4rem",
            borderColor:
              ctx?.formData.emailErrorMessage &&
              ctx?.formData.emailErrorMessage.length > 0
                ? "#f44336"
                : "white",
          }}
          placeholder="Email..."
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          name={"email"}
          value={ctx?.formData.email}
          className="focus:ring-0 focus:border text-white w-full border-none text-lg"
        />
        {ctx?.formData.emailErrorMessage &&
          ctx?.formData.emailErrorMessage.length > 0 && (
            <Alert
              // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/3 flex"
              className="w-full"
              variant="outlined"
              severity="error"
            >
              <div className="flex flex-col font-bold text-red-500">
                {ctx?.formData.emailErrorMessage.map((n, i) => {
                  return <span key={i}>{n}</span>;
                })}
              </div>
            </Alert>
          )}
      </span>
      <span className=" xxs:w-11/12 xs:w-3/4 sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 mt-6 flex flex-col items-center mb-6 text-field-hidden-1 ">
        <textarea
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          name={"message"}
          value={ctx?.formData.message}
          id="input-two"
          className="focus:ring-0 focus:border-none border-none w-full text-lg"
          placeholder="Message..."
          style={{
            minHeight: "5rem",
            borderColor:
              ctx?.formData.emailErrorMessage &&
              ctx?.formData.emailErrorMessage.length > 0
                ? "#f44336"
                : "white",
            backgroundColor: "rgb(51,51,51)",
          }}
        />
        {ctx?.formData.messageErrorMessage &&
          ctx?.formData.messageErrorMessage.length > 0 && (
            <Alert
              // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/3"
              className="w-full"
              variant="outlined"
              severity="error"
            >
              <div className="flex flex-col font-bold text-red-500">
                {ctx?.formData.messageErrorMessage.map((n, i) => {
                  return <span key={i}>{n}</span>;
                })}
              </div>
            </Alert>
          )}
      </span>
    </>
  );
}
