import Demo from './components/Demo'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';


// function App() {
//   // let name = "Shivam";
//   // let [name, setName] = useState("Shivam")
//   let [count, setCount] = useState(0);
  
//   function chnageFunction() {
//     console.log("Nane Before -> ", name);
//     // name = "Shrivastava";
//     // setName("Shrivastava");
//     setCount(count+1);
//     console.log("Name After -> ", name);
//   }

//   useEffect(() => {
//     console.log("UseEffect Funciton Runs")
//   }, [count])

//   return (
//    <div>
//     {/* <h1> Hello Wordld from {name}</h1> */}
//     <h1 className= "name">{count}</h1>
//     <Demo>

//     </Demo>
//     {/* <button onClick={chnageFunction}>Name Changer</button> */}
//     <button onClick={chnageFunction}>Counter</button>
//    </div>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

