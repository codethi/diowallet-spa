import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { BiArrowBack } from "react-icons/bi";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem] relative">
      <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
      <img src={logo} alt="" className="w-44" />
      <form className="flex flex-col items-center justify-center gap-4 w-full text-2xl">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit" text="SIGNUP" />
      </form>
    </div>
  );
}
