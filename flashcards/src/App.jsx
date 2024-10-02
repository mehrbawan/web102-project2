import './App.css';
import { useState } from 'react';
import Card from './Card.jsx';
import questions from './questions.json'; // Import the JSON file

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false); // Track flipped state in App

  const nextCard = () => {
    setFlipped(false); // Unflip the card when going to the next card
    setCurrentCardIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0 // Loop to first question when end is reached
    );
  };

  const prevCard = () => {
    setFlipped(false); // Unflip the card when going to the previous card
    setCurrentCardIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1 // Go to last question when at the start
    );
  };

  return (
    <div className="App">
      <h1>Cat Trivia</h1>
      <h2>Test your knowledge on all things cat!</h2>
      <Card
        question={questions[currentCardIndex]}
        flipped={flipped}
        setFlipped={setFlipped} // Pass down the flip state and updater
      />
      <br></br>
      <div><button onClick={prevCard}>←</button><button onClick={nextCard}>→</button></div>

    </div>
  )
}

export default App;
