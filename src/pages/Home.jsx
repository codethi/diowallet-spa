/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user";
import { findAllTransaction } from "../services/transactions";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [transactions, setTrasactions] = useState([]);

  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  }

  async function getUserLogged() {
    try {
      const userResponse = await userLogged();
      setUser(userResponse.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllTrasactions() {
    try {
      const response = await findAllTransaction();
      setTrasactions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    validateToken();
    getUserLogged();
    getAllTrasactions();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-zinc-900 rounded p-8 w-[60rem] h-[35rem] text-2xl">
      <header className="flex items-center justify-between w-full pb-4">
        <img src={logo} alt="Logo Dio Wallet" className="w-32" />
        <div className="flex items-center gap-4 text-white text-2xl">
          <h1>Olá, {user.name}</h1>
          <Link to="/signin">
            <GoSignOut />
          </Link>
        </div>
      </header>

      <section className="bg-zinc-300 p-4 w-full h-full rounded flex items-center justify-center ">
        {transactions.length ? (
          <ul>
            <li></li>
          </ul>
        ) : (
          <p>There is no check-in or check-out</p>
        )}
      </section>

      <footer className="w-full pt-2 flex gap-2 text-white text-lg font-bold">
        <Button type="button" text="New Input" icon="plus" />
        <Button type="button" text="New Output" icon="minus" />
      </footer>
    </main>
  );
}
