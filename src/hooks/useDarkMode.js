import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (boolean) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", boolean);

  useEffect(() => {
    const grabBody = document.querySelector("body");

    darkMode
      ? grabBody.classList.add("dark-mode")
      : grabBody.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
