import { contactMeData } from "../resources/contact-me-data";

export default function ContactFormSocials() {
  return (
    <div className="flex w-1/2 justify-evenly">
      {contactMeData.map((n, i) => {
        return (
          <a className="hover:scale-105 hover:transition-transform transition-transform" target="_blank" key={i} href={n.url}>
            {n.icon}
          </a>
        );
      })}
    </div>
  );
}
