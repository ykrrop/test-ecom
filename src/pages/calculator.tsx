"use client";

import Header from "@/components/Header";
import CalculatorButton from "@/components/CalculatorButton";
import useCalculator from "@/hooks/useCalculator";

const Calculator: React.FC = () => {
  const {
    input,
    previousInput,
    handleButtonClick,
    calculateResult,
    clearInput,
    handleBackspace,
  } = useCalculator();

  const buttons = [
    { label: "C", onClick: clearInput, className: "bg-gray-300" },
    {
      label: "+/-",
      onClick: () => handleButtonClick("+/-"),
      className: "bg-gray-300",
    },
    {
      label: "%",
      onClick: () => handleButtonClick("%"),
      className: "bg-gray-300",
    },
    {
      label: "÷",
      onClick: () => handleButtonClick("/"),
      className: "bg-sky-800 text-white",
    },
    {
      label: "7",
      onClick: () => handleButtonClick("7"),
      className: "bg-white",
    },
    {
      label: "8",
      onClick: () => handleButtonClick("8"),
      className: "bg-white",
    },
    {
      label: "9",
      onClick: () => handleButtonClick("9"),
      className: "bg-white",
    },
    {
      label: "x",
      onClick: () => handleButtonClick("*"),
      className: "bg-sky-800 text-white",
    },
    {
      label: "4",
      onClick: () => handleButtonClick("4"),
      className: "bg-white",
    },
    {
      label: "5",
      onClick: () => handleButtonClick("5"),
      className: "bg-white",
    },
    {
      label: "6",
      onClick: () => handleButtonClick("6"),
      className: "bg-white",
    },
    {
      label: "-",
      onClick: () => handleButtonClick("-"),
      className: "bg-sky-800 text-white",
    },
    {
      label: "1",
      onClick: () => handleButtonClick("1"),
      className: "bg-white",
    },
    {
      label: "2",
      onClick: () => handleButtonClick("2"),
      className: "bg-white",
    },
    {
      label: "3",
      onClick: () => handleButtonClick("3"),
      className: "bg-white",
    },
    {
      label: "+",
      onClick: () => handleButtonClick("+"),
      className: "bg-sky-800 text-white",
    },
    {
      label: ".",
      onClick: () => handleButtonClick("."),
      className: "bg-white",
    },
    {
      label: "0",
      onClick: () => handleButtonClick("0"),
      className: "bg-white",
    },
    { label: "<-", onClick: handleBackspace, className: "bg-white" },
    {
      label: "=",
      onClick: calculateResult,
      className: "bg-sky-800 text-white",
    },
  ];

  return (
    <section>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-200 p-6 rounded shadow-md w-[300px] h-[500px]">
          <div className="mb-4">
            <div className="text-right text-3xl font-extralight h-10 overflow-hidden text-gray-500">
              {previousInput}
            </div>
            <input
              type="text"
              value={input}
              readOnly
              className="bg-gray-200 text-right text-5xl font-semibold w-full border-none focus:outline-none h-24"
            />
          </div>
          <div className="grid grid-cols-4 gap-3 text-2xl font-semibold h-[300px]">
            {buttons.map((button, index) => (
              <CalculatorButton
                key={index}
                label={button.label}
                onClick={button.onClick}
                className={`${button.className} flex items-center justify-center h-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
