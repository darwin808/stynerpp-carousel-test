import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const imgList = [
   <img
      alt="First"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=1&w=350&h=200"
   />,
   <img
      alt="Second"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=2&w=350&h=200"
   />,
   <img
      alt="Third"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=3&w=350&h=200"
   />,
   <img
      alt="Fourth"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=4&w=350&h=200"
   />,
   <img
      alt="Fifth"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=5&w=350&h=200"
   />,
]

const imagesList = [
   "https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg",
]
function App() {
   const [count, setCount] = useState(0)
   const handleNext = (count) => {
      if (count >= 3) {
         setCount(0)
      } else {
         setCount(count + 1)
      }
   }
   const handlePrev = (count) => {
      if (count === 0) {
         setCount(3)
      } else {
         setCount(count - 1)
      }
   }

   return (
      <div
         className="App"
         style={{
            display: "flex",
         }}
      >
         <button onClick={() => handlePrev(count)}>-</button>
         <div>
            <img src={imagesList[count]} alt="image" height={400} width={500} />
         </div>

         <button onClick={() => handleNext(count)}>+</button>
      </div>
   )
}

export default App
