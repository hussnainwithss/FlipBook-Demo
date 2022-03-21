import React, { useEffect, useState } from "react";
import "./App.css";
// import FlipBook from "./Components/FlipBook";

const pdfPaths = [
  {
    name: "Foxit",
    path: "/pdfs/FoxitPdfSdk.pdf",
  },
  {
    name: "Condo",
    path: "/pdfs/CondoLiving.pdf",
  },
  {
    name: "The3M",
    path: "/pdfs/TheThreeMusketeers.pdf",
  },
];

function App() {
  const [pdfPath, setPdfPath] = useState(pdfPaths[0].path);
  const handleChange = (e) => {
    // setPdfPath(e.target.value);
    setPdfPath(e.target.value);
  };
  useEffect(() =>
    window
      .$(".solid-container")
      .FlipBook({ pdf: pdfPath })
  ,[pdfPath]);

  return (
    <>
      <div>
        {console.log("url",process.env.PUBLIC_URL)}
        <select onChange={handleChange}>
          {pdfPaths.map((pdfPath) => (
            <option value={pdfPath.path}>{pdfPath.name}</option>
          ))}
        </select>
      </div>

      <div className="solid-container" style={{ height: "800px" }}></div>
    </>
  );
}

export default App;
