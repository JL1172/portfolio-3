import { Alert, TextField, ThemeProvider } from "@mui/material";
import { theme } from "../styles/text-field-theme";
import { useContext } from "react";
import { ContactFormContext } from "../contexts/ContactFormContext";

export default function ContactFormTextFields() {
  const ctx = useContext(ContactFormContext);
  return (
    <ThemeProvider theme={theme}>
      <span className="w-full flex flex-col items-center">
        <TextField
          className="form-inputs"
          name={"email"}
          value={ctx?.formData.email}
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            width: "50%",
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
            <Alert className="w-1/2 flex" variant="outlined" severity="error">
              <div className="flex flex-col">
                {ctx?.formData.emailErrorMessage.map((n, i) => {
                  return <span key={i}>{n}</span>;
                })}
              </div>
            </Alert>
          )}
      </span>
      <span className="w-full flex flex-col items-center">
        <TextField
          className="form-inputs"
          name={"message"}
          value={ctx?.formData.message}
          onChange={(e) => ctx?.changeHandler(e.target.name, e.target.value)}
          multiline={true}
          minRows={5}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          sx={{
            width: "50%",
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
            <Alert className="w-1/2" variant="outlined" severity="error">
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
