
import { useState } from "react";
import Slide from "./Components/Slide";
import "./Style.css";
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

function App() {
  // My logic applied According to the problem
  const [ id , setId] = useState(0);

  // This my next button logic
  const Next = () =>
  {
    // console.log(data.length)
  if(id < 2)
  {
    setId(id + 1);
  }
  };

  // This my previous button logic
  const Previous = () =>
  {
  if(id > 0)
  {
    setId(id - 1);
  }
  };

  return (
    <div className="App">
      <h1>Slides</h1>
      <Slide data={data[id]}/>
     <button onClick={Previous} disabled={id === 0}>Prev</button>
      <button onClick={Next} disabled={id === 2}>Next</button>
      <h5>Creted by Akash</h5>
    </div>
  );
}

export default App;

