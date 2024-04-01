import React from "react"
import Header from "./components/header"
import Meme from "./components/meme"
import "./App.css"

// meme generator
export default function App() {
  return (
    <div className="Container">
      <Header />
      <Meme />
    </div>
  )
}

//add items :
// export default function App() {

//   const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
//   function addItem() {
//     const newThingText = `Thing ${things.length + 1}`;

//     setThings((prevThing) => [...prevThing, newThingText])
//   }
//   const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>)
//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   )
// }
