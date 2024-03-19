import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let img1 = <img src="https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
  let img2 = <img src="https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
  let img3 = <img src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />

  return (
    <>
      <h1 className="bg-blue-500 p-2 rounded mb-4">Tailwind CSS</h1>
      <div className="flex gap-2">
        <Card cardImg={img1} userName="Tabby" />
        <Card cardImg={img2} userName="Flower"/>
        <Card cardImg={img3} userName="Snow"/>
      </div>
    </>
  );
}

export default App;
