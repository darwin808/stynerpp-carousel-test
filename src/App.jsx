import { useState, useEffect, useRef } from "react"
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
   const [timeLeft, setTimeLeft] = useState(3)
   const intervalRef = useRef() // Add a ref to store the interval id

   useEffect(() => {
      intervalRef.current = setInterval(() => {
         setTimeLeft((t) => t - 1)
      }, 1000)
      return () => clearInterval(intervalRef.current)
   }, [])

   // Add a listener to `timeLeft`
   useEffect(() => {
      if (timeLeft < 0) {
         setTimeLeft(3)
      }
   }, [timeLeft])

   return (
      <div
         className="App"
         style={{
            display: "flex",
         }}
      >
         <div>
            <img src={imagesList[timeLeft]} alt="image" height={400} width={500} />
         </div>
      </div>
   )
}

export default App
