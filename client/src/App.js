import React from "react";
import NoteCard from "./components/NoteCard/NoteCard"; // Adjust the import path as necessary
import "./App.css";

function App() {
  return (<div>
    <div className="container">
    <div>
        <h1>Seattle Unfreeze</h1>
    </div>
      <NoteCard>
        <p>This is the content of the flashcard.</p>
      </NoteCard>
      <div className="button-container">
        <button class='btn btn-primary'>Previous Question</button>
        <button class='btn btn-primary'>Next Question</button>
      </div>
    </div>
    </div>
  );
}

export default App;
