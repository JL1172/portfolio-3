import { Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import { ContactFormContext } from "../contexts/ContactFormContext";
import { useContext, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import "../styles/contact.css";

const buttonSx = {
  fontFamily: "inherit",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  marginBottom: "1rem",
  height: "3rem",
  bgcolor: green[500],
  "&:hover": {
    bgcolor: green[700],
  },
};
export default function ContactFormButton() {
  const ctx = useContext(ContactFormContext);
  useEffect(()=>{
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible-button");
        }
      })
    })
    const hiddenButton = document.querySelectorAll(".hidden-button");
    hiddenButton.forEach(element=> observer.observe(element));
  },[])
  return ctx?.formData.spinnerOn ? (
    <LoadingButton
      id="button"
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
      }}
      className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12"
    >
      Loading...
    </LoadingButton>
  ) : ctx?.formData.secondarySpinnerOn ? (
    <Button
      id="button"
      className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12"
      variant="contained"
      sx={buttonSx}
    >
      <CheckIcon sx={{ marginRight: "1rem" }} />
      Successfully Sent
    </Button>
  ) : (
    !ctx?.formData.spinnerOn &&
    !ctx?.formData.secondarySpinnerOn && (
      <Button
        className="xxs:w-full xs:w-full sm:w-3/4 md:w-1-2 lg:w-1/2 xxl:w-4/12 hidden-button"
        id="button"
        onClick={() => ctx?.submitForm()}
        sx={{
          bgcolor: "white",
          color: "black",
          fontFamily: "inherit",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          marginBottom: "1rem",
          height: "3rem",
          "&:hover": {
            bgcolor: "transparent",
            color: "white",
          },
        }}
        variant="contained"
      >
        Connect With Me
      </Button>
    )
  );
}
