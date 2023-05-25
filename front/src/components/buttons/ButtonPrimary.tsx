import React, { DOMAttributes } from "react";
import Image from "next/image";
import arrow from "@icons/arrows/arrow-right.svg";

type typeButton = "button-circle-blue" | "button-circle-orange" | "button-orange"| "button-blue";

interface ButtonPrimaryProps extends DOMAttributes<HTMLButtonElement> {

    type?: typeButton;
    onClick: (event:React.MouseEvent) => void
}


export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ type, children, onClick }) => {

  return <button className={type} onClick={onClick}>
    <span>
        {children}
    </span>
    <span className="button-circle-bg-icon" >
      <Image src={arrow} alt="arrow" width={24}
        height={24}/>
    </span>
  
  </button>;
};
