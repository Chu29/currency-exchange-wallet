import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // this function reads from the local storage
  const readLocalStorage = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading Data from localStorage key ${key}:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState(readLocalStorage);

  // this effect fires when the value changes (write to local storage)
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error writing to local storage key ${key}`, error);
    }
  }, [key, storedValue]);

  // listen to changes on other browser windows
  useEffect(() => {
    const handleValueChange = (e) => {
      if (e.key === key) setStoredValue(readLocalStorage());
    };

    window.addEventListener("storage", handleValueChange);
    return () => window.removeEventListener("storage", handleValueChange);
  }, [key, readLocalStorage]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
