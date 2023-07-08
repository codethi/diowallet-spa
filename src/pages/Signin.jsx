import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/SigninSchema";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });

  function handleSubmitForm(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <img src={logo} alt="" className="w-44" />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col justify-center gap-4 w-full text-2xl"
      >
        <Input
          type="email"
          placeholder="Email"
          register={register}
          name="email"
        />
        {errors.email && <ErrorInput text={errors.email.message} />}
        <Input
          type="password"
          placeholder="Password"
          register={register}
          name="password"
        />
        {errors.password && <ErrorInput text={errors.password.message} />}
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
