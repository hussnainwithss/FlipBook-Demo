import React from "react";
import { useFlipBook } from "./hooks/useFlipbook";
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
  const { FlipBook, setPdfPath, unLoadPdf } = useFlipBook({
    initialPdfPath: pdfPaths[0].path,
  });

  const handleChange = (e) => {
    // setPdfPath(e.target.value);
    setPdfPath(e.target.value);
    // setPdf(e.target.value);
  };

  return (
    <>
      <div>
        {console.log("url", process.env.PUBLIC_URL)}
        <select onChange={handleChange}>
          {pdfPaths.map((pdfPath) => (
            <option value={pdfPath.path}>{pdfPath.name}</option>
          ))}
        </select>
        <button onClick={unLoadPdf}>Unload Pdf</button>
      </div>
      <FlipBook />
    </>
  );
}

export default App;
