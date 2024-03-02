import { ReactElement } from "react";
import { FaReact } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

type CategoryType = {
    cat_type?: string;
    cat_color?:string;
    cat_icon?:ReactElement;

}
export const categories:CategoryType[] = [
    {
      cat_type: "Backend",
      cat_color: "#E0234E",
      cat_icon: <SiNestjs className="lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-24 sm:h-24 xs:h-24 xs:w-24 xxs:h-24 xxs:w-24" color="#E0234E" />,
    },
    {
      cat_type: "Frontend",
      cat_color: "rgb(97, 219, 251)",
      cat_icon: <FaReact className="lg:w-32 lg:h-32 md:w-24 md:h-24 sm:w-24 sm:h-24 xs:h-24 xs:w-24 xxs:h-24 xxs:w-24" color="rgb(97, 219, 251)" />,
    },
  ];
  