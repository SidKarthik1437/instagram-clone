import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css"

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,

  document.getElementById("root")
);

//  client-side rendered app: react(cra)
// -> database which is firebse
// -> react-loading-skeleton
// tailwind

  // structure
  // src
  // ->components
  // ->constatnts
  // ->context
  // ->helpers
  // -> hooks
  // -> pages
  // ->lib (firebase is going to live here)
  // ->services (firebase functions in here)
  // -> styles(tailwind's folder (app,tailwind))
