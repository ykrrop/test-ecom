"use client";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useState } from "react";

const Home = () => {
  const { setName } = useStore();
  const [name, setLocalName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setLocalName(newName);
  };

  const handleOpen = () => {
    localStorage.setItem("userName", name);
    setName(name);
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="border border-gray-200 shadow-lg rounded-xl p-10 w-[750px] h-[264px]">
        <p className="text-left text-xl">Начать</p>
        <label className="text-left w-full">
          <span className="block mt-4">Напишите ваше имя</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="border border-zinc-300 rounded-xl p-3 w-full mt-2"
            placeholder="Ваше имя"
          />
        </label>

        <div className="flex justify-end space-x-4 mt-5">
          <Link href="/calculator" onClick={handleOpen}>
            <button className="bg-sky-800 text-white rounded-xl px-4 py-3 hover:bg-sky-950">
              Открыть калькулятор
            </button>
          </Link>
          <Link href="/password-generator" onClick={handleOpen}>
            <button className="bg-sky-800 text-white rounded-xl px-4 py-3 hover:bg-sky-950">
              Открыть генератор
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
