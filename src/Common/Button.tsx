import React from "react";

interface ButtonMediumProps{
    label:string;
    bgColor:string;
}

export const ButtonMedium : React.FC<ButtonMediumProps> =
({ label,bgColor}) =>{

const cssClass = `px-4 py-4 rounded-md text-sm mr-2 ${bgColor}`

return(
    <button className ={cssClass}>{label}</button>
);

};