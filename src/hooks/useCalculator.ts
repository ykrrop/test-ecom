import { useState, useEffect } from "react";
import { evaluate } from "mathjs";

const useCalculator = () => {
  const [input, setInput] = useState<string>("");
  const [previousInput, setPreviousInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = evaluate(
        input.replace(/÷/g, "/").replace(/x/g, "*")
      ).toString();
      setPreviousInput(input);
      setInput(calculatedResult);
    } catch {
      setPreviousInput("Ошибка");
      setInput("");
    }
  };

  const clearInput = () => {
    setInput("");
    setPreviousInput("");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;
    if (/^[0-9+\-x÷.()]+$/.test(key)) {
      handleButtonClick(key === "x" ? "*" : key === "÷" ? "/" : key);
    } else if (key === "Enter") {
      event.preventDefault();
      calculateResult();
    } else if (key === "Backspace") {
      handleBackspace();
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  const displayInput = (value: string) => {
    return value.replace(/\//g, "÷").replace(/\*/g, "x");
  };

  return {
    input: displayInput(input),
    previousInput: displayInput(previousInput),
    handleButtonClick,
    calculateResult,
    clearInput,
    handleBackspace,
  };
};

export default useCalculator;
