import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { ContactFormContext } from "../contexts/ContactFormContext";
import { useContext } from "react";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const buttonSx = {
  fontFamily: "inherit",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  marginBottom: "1rem",
  height: "3rem",
  width: "50%",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[700],
  },
};

export default function ContactFormButton() {
    const ctx = useContext(ContactFormContext);

    return (
        ctx?.formData.spinnerOn ? (
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
              sx={{
                bgcolor: "white",
                color: "blue",
                fontFamily: "inherit",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                marginBottom: "1rem",
                height: "3rem",
                width: "50%",
              }}
              id="button"
            >
              Loading...
            </LoadingButton>
          ) : ctx?.formData.spinnerOn ? (
            <Button variant="contained" sx={buttonSx}>
              <CheckIcon sx={{ marginRight: "1rem" }} />
              Successfully Sent
            </Button>
          ) : (
            <Button
              onClick={() => ctx?.submitForm()}
              sx={{
                bgcolor: "white",
                color: "black",
                fontFamily: "inherit",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                marginBottom: "1rem",
                height: "3rem",
                width: "50%",
                "&:hover": {
                  bgcolor: "transparent",
                  color: "white",
                },
              }}
              id="button"
              variant="contained"
            >
              Share Your Feedback
            </Button>
          )
    )
}