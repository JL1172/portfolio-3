import axios from "axios";
import { PayloadType } from "../schema/contact-form-schema";
import { urlDict } from "../resources/urls";

//create form submission
export async function submit_form(payload: PayloadType) {
  return await axios.post(urlDict.formspree, payload);
} 
