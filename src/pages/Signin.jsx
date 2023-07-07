import logo from "../assets/logo.png";

export default function Signin() {
  //codigos Js
  //const name = "Thiago";

  //retorno HTML
  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
      <img src={logo} alt="" className="w-44" />
      <form className="flex flex-col justify-center gap-4 w-full text-2xl">
        <input
          type="email"
          placeholder="Email"
          className="rounded p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded p-2 w-full"
        />

        <button
          type="submit"
          className="px-4 py-2 rounded w-full font-bold text-white text-2xl"
        >
          SIGNIN
        </button>
      </form>

      <p className="text-white text-2xl">Dont have an account? Register</p>
    </div>
  );
}
