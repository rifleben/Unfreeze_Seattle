import React from "react";
import { useState, useEffect } from "react";
import NoteCard from "./components/NoteCard/NoteCard";
import CustomButton from "./components/NoteCard/CustomButton";
import axios from "axios";

import "./App.css";
import styles from "./components/NoteCard/CustomButton.module.css";



function App() {
  // using state to store data from API and then keep track of an index
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  // useEffect to make an API call to the backend
  useEffect(() => {
    axios.get('/notecards')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }, []);

  // function to increment the index on button click
  const nextQuestion = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > data.notecards.length - 1) {
        return 0;
      }
      return newIndex;
    })
  }

  // function to decrement the index on button click
  const prevQuestion = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return data.notecards.length - 1;
      }
      return newIndex;
    })
  }

  // if data is not loaded, or does not exist, display loading message
  const cardText = data.notecards ? data.notecards[index].text : "Loading...";
  
  // return the notecard and buttons (buttons use bootstrap icons for arrows)
  return (
    <div>
      <div className="container">
          <h1>Unfreeze Seattle</h1>
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
  );
}

export default App;
