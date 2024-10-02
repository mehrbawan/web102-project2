import './App.css';
import { useState } from 'react';
import Card from './Card.jsx';
import questions from './questions.json'; // Import the JSON file

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Initial card is the first one
  const [flipped, setFlipped] = useState(false); // State to track flipped status

  // Generate a random card index
  const getRandomCard = () => {
    let randomIndex;
    // Keep generating a new index until it's different from the current card
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (randomIndex === currentCardIndex); // Prevent the same card from showing twice in a row

    setCurrentCardIndex(randomIndex);
    setFlipped(false); // Unflip the card when switching to a new card
  };

  return (
    <div className="App"><center>
      <img src="https://cdn-icons-png.freepik.com/256/6988/6988878.png?semt=ais_hybrid" height="150px"></img>
      <h1>Cat Trivia</h1>
      <h2>Test your knowledge on all things cat with these 15 trivia flashcards!</h2>
      <Card 
        question={questions[currentCardIndex]} 
        flipped={flipped} 
        setFlipped={setFlipped} 
      />
      <br></br>
      <button className='button' onClick={getRandomCard}>Next</button>
    </center></div>
  );
};

export default App;
