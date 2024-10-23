"use client";
import Header from "@/components/Header";
import { Copy, Check, Trash } from "lucide-react";
import usePasswordGenerator from "@/hooks/usePasswordGenerator";

const PasswordGenerator = () => {
  const {
    length,
    setLength,
    useUppercase,
    setUseUppercase,
    useLowercase,
    setUseLowercase,
    useNumbers,
    setUseNumbers,
    useSymbols,
    setUseSymbols,
    avoidRepeats,
    setAvoidRepeats,
    passwords,
    generatePassword,
    removePassword,
  } = usePasswordGenerator();

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password);
    alert("Пароль скопирован: " + password);
  };

  return (
    <section className="w-[1207px] mx-auto">
      <Header />
      <div className="mt-32">
        <h2 className="text-5xl font-bold">Генератор паролей</h2>
        <div className="flex space-x-10">
          <div className="w-1/2">
            <label className="text-left">
              <span className="block mt-4">Длина пароля:</span>
              <input
                type="number"
                value={length || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setLength(value ? Number(value) : 0);
                }}
                className="border border-zinc-300 rounded-xl p-3 w-full mt-2"
                placeholder="Введите число"
                min="1"
              />
            </label>
            <div className="flex flex-col space-y-4 mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useUppercase}
                  onChange={() => setUseUppercase(!useUppercase)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded-lg flex items-center justify-center mr-2 ${
                    useUppercase ? "bg-sky-800" : "bg-gray-200"
                  }`}
                >
                  {useUppercase && <Check className="text-white" size={16} />}
                </div>
                <span>Использовать прописные буквы</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useLowercase}
                  onChange={() => setUseLowercase(!useLowercase)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded-lg flex items-center justify-center mr-2 ${
                    useLowercase ? "bg-sky-800" : "bg-gray-200"
                  }`}
                >
                  {useLowercase && <Check className="text-white" size={16} />}
                </div>
                <span>Использовать строчные буквы</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useNumbers}
                  onChange={() => setUseNumbers(!useNumbers)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded-lg flex items-center justify-center mr-2 ${
                    useNumbers ? "bg-sky-800" : "bg-gray-200"
                  }`}
                >
                  {useNumbers && <Check className="text-white" size={16} />}
                </div>
                <span>Использовать цифры</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={useSymbols}
                  onChange={() => setUseSymbols(!useSymbols)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded-lg flex items-center justify-center mr-2 ${
                    useSymbols ? "bg-sky-800" : "bg-gray-200"
                  }`}
                >
                  {useSymbols && <Check className="text-white" size={16} />}
                </div>
                <span>Использовать символы %, *, ), ?, @, #, $, ~</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={avoidRepeats}
                  onChange={() => setAvoidRepeats(!avoidRepeats)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border rounded-lg flex items-center justify-center mr-2 ${
                    avoidRepeats ? "bg-sky-800" : "bg-gray-200"
                  }`}
                >
                  {avoidRepeats && <Check className="text-white" size={16} />}
                </div>
                <span>Избегать повторения символов</span>
              </label>
            </div>
            <button
              onClick={generatePassword}
              className="flex bg-sky-700 p-4 text-white rounded-xl mt-4"
            >
              Сгенерировать пароль
            </button>
          </div>
          <div className="w-1/2 mt-12 space-y-2">
            {passwords.map((password, index) => (
              <div
                key={index}
                className="border border-gray-200 p-1 px-4 flex justify-between items-center"
              >
                <span>{password}</span>
                <div className="flex items-center">
                  <button
                    onClick={() => copyToClipboard(password)}
                    className="text-sm rounded p-1 ml-4"
                  >
                    <Copy className="text-sky-700 hover:text-sky-900" />
                  </button>
                  <button
                    onClick={() => removePassword(index)}
                    className="text-sm rounded p-1 ml-4"
                  >
                    <Trash className="hover:text-red-800" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordGenerator;
