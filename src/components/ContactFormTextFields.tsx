import { Alert, ThemeProvider } from "@mui/material";
import { theme } from "../styles/text-field-theme";
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
    <ThemeProvider theme={theme}>
      <span className=" xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 flex flex-col items-center mb-6 text-field-hidden-1">
        {/* <TextField
          inputProps={{ style: { color: "white" } }}
          // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/2"
          className="w-full"
          name={"email"}
          value={ctx?.formData.email}
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          InputLabelProps={{
            style: {
              color:
              ctx?.formData.emailErrorMessage &&
              ctx?.formData.emailErrorMessage.length > 0
              ? ""
              : "white",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              // borderColor: "transparent", // Set the border color to transparent
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
              ctx?.formData.emailErrorMessage &&
              ctx?.formData.emailErrorMessage.length > 0
              ? "#f44336"
              : "white",
            },
            "& .MuiInputLabel-root": {
              color:
              ctx?.formData.emailErrorMessage &&
              ctx?.formData.emailErrorMessage.length > 0
              ? "#f44336"
              : "white",
            },
            "& .MuiInputLabel-shrink": {
              color: "white",
            },
          }}
          label={"Email*"}
          />
          {ctx?.formData.emailErrorMessage &&
            ctx?.formData.emailErrorMessage.length > 0 && (
              <Alert
              // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/3 flex"
              className="w-full"
              variant="outlined"
              severity="error"
              >
              <div className="flex flex-col">
              {ctx?.formData.emailErrorMessage.map((n, i) => {
                return <span key={i}>{n}</span>;
              })}
              </div>
              </Alert>
            )} */}
        <input
          type="email"
          id = "input-one"
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
          className="focus:ring-0 focus:border text-white w-full inputs border-none"
        />
        {ctx?.formData.emailErrorMessage &&
          ctx?.formData.emailErrorMessage.length > 0 && (
            <Alert
              // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/3 flex"
              className="w-full"
              variant="outlined"
              severity="error"
            >
              <div className="flex flex-col">
                {ctx?.formData.emailErrorMessage.map((n, i) => {
                  return <span key={i}>{n}</span>;
                })}
              </div>
            </Alert>
          )}
      </span>
      <span className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 flex flex-col items-center text-white mb-6 text-field-hidden-2">
        {/* <TextField
          inputProps={{ style: { color: "white" } }}
          name={"message"}
          className="w-full"
          // className="xxs:w-11/12 xs:w-11/12 md:1/2 lg:1/3"
          value={ctx?.formData.message}
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          multiline
          minRows={5}
          InputLabelProps={{
            style: {
              color:
                ctx?.formData.messageErrorMessage &&
                ctx?.formData.messageErrorMessage.length > 0
                  ? ""
                  : "white",
            },
          }}
          sx={{
            bgcolor: "rgb(51,51,51)",
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                // borderColor: 'transparent', // Set the border color to transparent
              },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor:
                ctx?.formData.messageErrorMessage &&
                ctx?.formData.messageErrorMessage.length > 0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-root": {
              color:
                ctx?.formData.messageErrorMessage &&
                ctx?.formData.messageErrorMessage.length > 0
                  ? "#f44336"
                  : "white",
            },
            "& .MuiInputLabel-shrink": {
              color: "white",
            },
          }}
          label={"Message*"}
        /> */}
        <textarea
        id = "input-two"
          className="focus:ring-0 focus:border-none border-none w-full inputs"
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
              <div className="flex flex-col">
                {ctx?.formData.messageErrorMessage.map((n, i) => {
                  return <span key={i}>{n}</span>;
                })}
              </div>
            </Alert>
          )}
      </span>
    </ThemeProvider>
  );
}
