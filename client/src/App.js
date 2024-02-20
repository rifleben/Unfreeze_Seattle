import React from "react";
import NoteCard from "./components/NoteCard/NoteCard";
import CustomButton from "./components/NoteCard/CustomButton";

import "./App.css";
import styles from "./components/NoteCard/CustomButton.module.css";


function App() {
  return (
    <div>
      <div className="container">
        <div>
          <h1>Seattle Unfreeze</h1>
        </div>
        <NoteCard>
          <p>This is the content of the flashcard.</p>
        </NoteCard>
        <div className={styles.buttonContainer}>
          <CustomButton onClick={() => console.log('Prev Question')}>
            <i className="bi bi-arrow-left-square-fill"></i> Previous Question
          </CustomButton>
          <CustomButton onClick={() => console.log('Next Question')}>
            Next Question <i className="bi bi-arrow-right-square-fill"></i>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default App;
