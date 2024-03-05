import AddInsult from "./AddInsult";
import "./App.css";
import Insults from "./Insults";
import { useState } from "react";

function App() {
  const [randomInsult, setRandominsult] = useState("");
  const [insults, setInsult] = useState([
    {
      insult:
        "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
      author: "Macbeth",
    },
    { insult: "Never hung poison on a fouler toad ", author: "Richard III" },
    {
      insult: "He thinks too much: such men are dangerous",
      author: "Julius Ceasar",
    },
    {
      insult:
        "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs",
      author: "The Merchant of Venice",
    },
    {
      insult: "Give me your hand...I can tell your fortune. You are a fool.",
      author: "The Two Noble Kinsmen",
    },
    {
      insult:
        "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
      author: "The Tempest",
    },
    {
      insult:
        "It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
      author: "Macbeth",
    },
    {
      insult:
        "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake",
      author: "Titus Andronicus",
    },
    {
      insult:
        "He hath eaten me out of house and home; he hath put all substance into that fat belly of his",
      author: "Henry IV, Part 2",
    },
    {
      insult:
        "Out, you green-sickness carrion! Out, you baggage! You tallow-face",
      author: "Romeo and Juliet",
    },
  ]);

  const getRandomInsult = () => {
    const randomIndex = Math.floor(Math.random() * insults.length);
    const randomItem = insults[randomIndex];
    setRandominsult(randomItem);
  };

  if (!randomInsult) {
    getRandomInsult();
  }

  /*
  const insultsComponents = insultsArr.map((insult) => {
    return <Insults insult={insult.insult} author={insult.author} />;
  });

  */

  function addInsult(newInsult) {
    console.log("I updateInsult funktion:", newInsult);

    const newArray = [...insults];
    newArray.push(newInsult);
    console.log(newArray);
    setInsult(newArray);
  }

  return (
    <>
      <>
        {<Insults insult={randomInsult.insult} author={randomInsult.author} />}
        <button className="shakespearish-button" onClick={getRandomInsult}>
          Get Another Random Insult
        </button>
        <AddInsult addInsult={addInsult} />
      </>
    </>
  );
}

export default App;
