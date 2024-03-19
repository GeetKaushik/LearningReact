import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("rgb(25, 25, 25)");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center bg-zinc-900"
      style={{ background: color }}
    >
      <h1 className="text-white text-6xl shadow-xl p-4 rounded-full" style={{ color: "white" }}>
        Bg Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-slate-100 px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("#e81416")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#e81416" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("#ffa500")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#ffa500" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("#faeb36")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#faeb36" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#79c314")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#79c314" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#487de7")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#487de7" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("#4b369d")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#4b369d" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("#70369d")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "#70369d" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
