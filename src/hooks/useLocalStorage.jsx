import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue = null) => {
  // Get localStorage value or set it to the initialValue if not found
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.error("Error parsing localStorage key:", key, error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  // Function to set value in localStorage
  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  // Function to clear specific key in localStorage
  const clearLocalStorage = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error clearing localStorage key:", key, error);
    }
  };

  return [storedValue, setLocalStorage, clearLocalStorage];
};

export default useLocalStorage;
