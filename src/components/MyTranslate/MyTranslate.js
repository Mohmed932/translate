import React from "react";
import "./MyTranslate.css";

const MyTranslate = ({
  setvalone,
  result,
  setshowone,
  setshowtwo,
  languageOne,
  languageTwo,
}) => {
  const CopyResult = (result) => {
    const copy = window.navigator.clipboard.writeText(result);
    copy.then(() => console.log("success")).catch(() => console.log("error"));
  };
  return (
    <div className="MyTranslate">
      <div className="Select-Language">
        <span onClick={() => setshowone(true)}>
          {languageOne === "" ? "Select-Language" : languageOne.name}
        </span>
        <span onClick={() => setshowtwo(true)}>
          {languageTwo === "" ? "Select-Language" : languageTwo.name}
        </span>
      </div>
      <div className="MyTranslate-content">
        <div className="Translate-frist">
          <input
            type="text"
            placeholder="Translation"
            onChange={(e) => setvalone(e.target.value)}
          />
        </div>
        <div className="Translate-second">
          <input type="text" value={result} />
          <div className="Translation-copy">
            <i class="fa-solid fa-copy" onClick={() => CopyResult(result)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTranslate;
