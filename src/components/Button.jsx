/* eslint-disable react/prop-types */
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

export default function Button({ text, type, icon }) {
  let IconComponent;

  if (icon === "plus") IconComponent = BiPlusCircle;
  if (icon === "minus") IconComponent = BiMinusCircle;


  return (
    <button
      type={type}
      className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center gap-2"
    >
      {IconComponent && <IconComponent />} {text}
    </button>
  );
}
