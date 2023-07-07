import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin() {
  //codigos Js
  //const name = "Thiago";

  //retorno HTML
  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <img src={logo} alt="" className="w-44" />
      <form className="flex flex-col justify-center gap-4 w-full text-2xl">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" text="SIGNIN" />
      </form>

      <p className="text-white text-2xl">
        Dont have an account?{" "}
        <Link to="/signup" className="text-sky-400 hover:text-sky-600">
          Register
        </Link>
      </p>
    </div>
  );
}
