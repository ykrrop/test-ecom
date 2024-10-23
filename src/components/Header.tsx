"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { name } = useStore();
  const router = useRouter();

  return (
    <section className="w-[1207px] mx-auto flex justify-between items-center mt-8">
      <div>
        <ul className="flex space-x-14 font-bold">
          <Link href="/">
            <li
              className={
                router.pathname === "/"
                  ? "bg-sky-800 text-white rounded-xl p-1"
                  : "hover:underline"
              }
            >
              Главная
            </li>
          </Link>
          <Link href="/calculator">
            <li
              className={
                router.pathname === "/calculator"
                  ? "bg-sky-800 text-white rounded-xl p-1"
                  : "hover:underline"
              }
            >
              Калькулятор
            </li>
          </Link>
          <Link href="/password-generator">
            <li
              className={
                router.pathname === "/password-generator"
                  ? "bg-sky-800 text-white rounded-xl p-1"
                  : "hover:underline"
              }
            >
              Генерация паролей
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center space-x-3">
        <p className="font-semibold">{name || "Имя не указано"}</p>{" "}
        <div className="w-10 h-10 bg-sky-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
          <p className="mb-1">{name[0]}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
