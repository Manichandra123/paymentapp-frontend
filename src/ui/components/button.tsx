 import React from "react"
 
 interface Buttonprops {
  varient :"primary" | "secondary" |"denger",
  size:"sm"|"md"|"lg",
  text: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  onClick? : ()=>void
 }

 const varientStype = {
   primary: "bg-zinc-900 text-white m-2 rounded-md p-2 hover:bg-zinc-700",
   secondary: "bg-zinc-100 text-black m-2 rounded-md p-2  hover:bg-zinc-200",
   denger : "bg-red-200 text-indigo-600 m-2 rounded-md p-2  hover:bg-red-300"
 }
 const sizeStyle = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-3 px-6"
}

function Button(props:Buttonprops){
    return (
        <>
        <div>
            <button className ={`${varientStype[props.varient]} ${sizeStyle[props.size]}  cursor-pointer flex items-center justify-center gap-2`} onClick={props.onClick} >{props.text}</button>
        </div>
        </>
    )
}

export default Button;