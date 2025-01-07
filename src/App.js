// App.js
import React from "react";
import "./App.css"; // Tailwind CSS included here
import Sertf from "./img/sertf1.png"
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[210mm] h-[297mm]">
        <img
          src={Sertf}
          alt="A4 Document"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default App;
