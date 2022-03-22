import { useState, useEffect, useMemo, useRef } from "react";

const keyBoardNavBindingsObj = {
  actions: {
    cmdBackward: {
      code: 37,
    },
    cmdForward: {
      code: 39,
    },
  },
};
const defaultHtmlTemplatePath =
  process.env.PUBLIC_URL + "templates/default-book-view.html";
const defaultCssPath = process.env.PUBLIC_URL + "css/black-book-view.css";
const defaultJsPath = process.env.PUBLIC_URL + "js/default-book-view.js";

const defaultTemplateObject = {
  // by means this property you can choose appropriate skin
  html: defaultHtmlTemplatePath,
  styles: [
    defaultCssPath, // or one of white-book-view.css, short-white-book-view.css, shart-black-book-view.css
  ],
  links: [
    {
      rel: process.env.PUBLIC_URL + "stylesheet",
      href: process.env.PUBLIC_URL + "css/font-awesome.min.css",
    },
  ],
  script: defaultJsPath,
  printStyle: undefined, // or you can set your stylesheet for printing ('print-style.css')
  sounds: {
    startFlip: process.env.PUBLIC_URL + "sounds/start-flip.mp3",
    endFlip: process.env.PUBLIC_URL + "sounds/end-flip.mp3",
  },
};



export const FlipBook = () => <div className="solid-container" style={{ height: "800px" }}></div>;
// const defaultExtraStyles = process.env.PUBLIC_URL
export const useFlipBook = ({
  initialPdfPath,
  onLoad,
  onError,
  allowKeyBoardNav,
  htmlTemplatePath,
  cssPath,
  jsPath,
}) => {
  
  const [pdfPath, setPdfPath] = useState(initialPdfPath || "");
  const options = useMemo(
    () => ({ pdf: pdfPath, template: defaultTemplateObject }),
    [pdfPath]
  );
  const bookRef = useRef();
  if (onLoad) {
    options["ready"] = onLoad;
  }
  if (onError) {
    options["error"] = onError;
  }
  if (allowKeyBoardNav) {
    options["controlsProps"] = keyBoardNavBindingsObj;
  }
  if (htmlTemplatePath) {
    options["template"]["html"] = htmlTemplatePath;
  }
  if (cssPath) {
    options["template"]["styles"] = [...options["template"]["styles"], cssPath];
  }
  if (jsPath) {
    options["template"]["script"] = [...options["template"]["script"], jsPath];
  }
  
  useEffect(() => {
    const book = window.$(".solid-container").FlipBook(options);
    bookRef.current = book;
  }, [options]);
 const unLoadPdf = () => {
    if (bookRef.current) console.log(bookRef.current);
    bookRef.current.dispose();
  };
  return { FlipBook, setPdfPath, unLoadPdf };
};
