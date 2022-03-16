import React from "react";

export default function Mask(props) {
  let lastWord = "";

  const countChar = (word) => {
    let replaced = word.replace(".", "").replace("-", "");

    return replaced.length;
  };

  const handleChangeInputCpf = (e) => {
    //Expected: 231.002.999-00
    if (lastWord.length > e.target.value.length) {
    } else {
      if (e.target.value.length === 11) {
        e.target.value += "-";
      } else if (e.target.value.length === 12) {
        let lastChar = e.target.value.slice(-1);
        e.target.value = lastWord + "-" + lastChar;
      } else {
        if (e.target.value.length < 11) {
          if(lastWord.slice(-1) != ".") {
            if (lastWord.length !== 0 && countChar(lastWord) % 3 === 0) {
              let lastChar = e.target.value.slice(-1);
              e.target.value = lastWord + "." + lastChar;
            }
          }
        }
      }
    }
    lastWord = e.target.value;
  };

  const handleChangeInputCnpj = (e) => {
    console.log(`CNPJ = ${e.target.value}`);
  };

  const choiceInputType = (e) => {
    if (props.type === "CNPJ") {
      handleChangeInputCnpj(e);
    } else {
      handleChangeInputCpf(e);
    }
  };

  return (
    <div>
      <input maxLength="14" onChange={(e) => choiceInputType(e)} />
    </div>
  );
}
