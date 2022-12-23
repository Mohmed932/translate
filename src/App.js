/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import GetLanguageOne from "./components/GetLanguageOne/GetLanguageOne";
import GetLanguageTwo from "./components/GetLanguageTwo/GetLanguageTwo";
import MyTranslate from "./components/MyTranslate/MyTranslate";

const App = () => {
  const [valone, setvalone] = useState("");

  const [result, setresult] = useState("");
  const [languageOne, setlanguageOne] = useState("");
  const [languageTwo, setlanguageTwo] = useState("");
  const [showone, setshowone] = useState(true);
  const [showtwo, setshowtwo] = useState(false);

  useEffect(() => {
    if (valone.length > 0) {
      const encodedParams = new URLSearchParams();
      encodedParams.append("from", languageOne.code);
      encodedParams.append("to", languageTwo.code);
      encodedParams.append("text", valone);

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "c11d223f3amsh3b4b6ec91a12073p1b9c73jsn8c5a8d4b931e",
          "X-RapidAPI-Host": "translo.p.rapidapi.com",
        },
        body: encodedParams,
      };

      fetch("https://translo.p.rapidapi.com/api/v3/translate", options)
        .then((response) => response.json())
        .then((response) => setresult(response.translated_text))
        .catch((err) => console.error(err));
    }
  }, [valone]);
  return (
    <div className="App">
      <MyTranslate
        setvalone={setvalone}
        setshowone={setshowone}
        setshowtwo={setshowtwo}
        languageOne={languageOne}
        languageTwo={languageTwo}
        result={result}
      />
      {showone ? (
        <GetLanguageOne
          setlanguageOne={setlanguageOne}
          setshowone={setshowone}
        />
      ) : (
        ""
      )}
      {showtwo ? (
        <GetLanguageTwo
          setlanguageTwo={setlanguageTwo}
          setshowtwo={setshowtwo}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
