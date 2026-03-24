import React, { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div style={styles.container}>
      <h1>📝 Notes App</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addNote} style={styles.button}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {notes.map((note, index) => (
          <li key={index} style={styles.note}>
            {note}
            <button onClick={() => deleteNote(index)} style={styles.delete}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  inputBox: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  note: {
    background: "#f4f4f4",
    margin: "10px auto",
    padding: "10px",
    width: "300px",
    display: "flex",
    justifyContent: "space-between",
  },
  delete: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};