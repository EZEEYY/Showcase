import React from "react";
import useLocalStorage from "./useLocalStorage";

function LocalStorageExample() {
  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = useLocalStorage("items", []);

  const addItem = () => {
    setItems([...items, { id: Date.now(), text: inputText }]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDarkMode = () => {
    const currentMode = localStorage.getItem("darkMode") === "true";
    localStorage.setItem("darkMode", !currentMode);
    document.body.classList.toggle("dark-mode");
  };

  React.useEffect(() => {
    const currentMode = localStorage.getItem("darkMode") === "true";
    if (currentMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return (
    <div>
      <h1>Local Storage Example</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default LocalStorageExample;
