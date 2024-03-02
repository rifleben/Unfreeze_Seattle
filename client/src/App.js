import React from "react";
import { useState, useEffect } from "react";
import NoteCard from "./components/NoteCard/NoteCard";
import CustomButton from "./components/NoteCard/CustomButton";
import axios from "axios";

import "./App.css";
import styles from "./components/NoteCard/CustomButton.module.css";



function App() {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    axios.get('/notecards')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  const nextQuestion = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > data.notecards.length - 1) {
        return 0;
      }
      return newIndex;
    })
  }

  const prevQuestion = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return data.notecards.length - 1;
      }
      return newIndex;
    })
  }

  const cardText = data.notecards ? data.notecards[index].text : "Loading...";

  return (
    <div>
      <div className="container">
        <div>
          <h1>Seattle Unfreeze</h1>
        </div>
        <div className="container">
        <NoteCard>
          <p><strong>{cardText}</strong></p>
        </NoteCard>
        <div className={styles.buttonContainer}>
          <CustomButton onClick={prevQuestion}>
            <i className="bi bi-arrow-left-square-fill"></i> Previous Question
          </CustomButton>
          <CustomButton onClick={nextQuestion}>
            Next Question <i className="bi bi-arrow-right-square-fill"></i>
          </CustomButton>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
