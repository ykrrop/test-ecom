import { useState } from "react";

const usePasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [useUppercase, setUseUppercase] = useState(false);
  const [useLowercase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [avoidRepeats, setAvoidRepeats] = useState(false);
  const [passwords, setPasswords] = useState<string[]>([]);

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "%*)?@#$~";

    let charset = "";
    if (useUppercase) charset += upper;
    if (useLowercase) charset += lower;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;

    if (!charset) return;

    const generateSinglePassword = () => {
      let password = "";
      const uniqueChars = new Set<string>();

      for (let i = 0; i < length; i++) {
        let randomChar = charset[Math.floor(Math.random() * charset.length)];

        if (avoidRepeats) {
          while (uniqueChars.has(randomChar)) {
            randomChar = charset[Math.floor(Math.random() * charset.length)];
          }
          uniqueChars.add(randomChar);
        }

        password += randomChar;
      }
      return password;
    };

    const newPassword = generateSinglePassword();
    setPasswords((prevPasswords) => [newPassword, ...prevPasswords]);
  };

  const removePassword = (index: number) => {
    setPasswords((prevPasswords) =>
      prevPasswords.filter((_, i) => i !== index)
    );
  };

  return {
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
  };
};

export default usePasswordGenerator;
