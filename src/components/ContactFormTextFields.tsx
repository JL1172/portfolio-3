import { Alert, TextField, ThemeProvider } from "@mui/material";
import { theme } from "../styles/text-field-theme";
import { useContext } from "react";
import { ContactFormContext } from "../contexts/ContactFormContext";

export default function ContactFormTextFields() {
  const ctx = useContext(ContactFormContext);
  return (
    <ThemeProvider theme={theme}>
      <span className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 flex flex-col items-center mb-6">
        <TextField
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
            bgcolor: "rgb(51,51,51)",
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
          )}
      </span>
      <span className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 flex flex-col items-center text-white mb-6">
        <TextField
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
