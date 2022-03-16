import React from "react";

// MASK CPF => O usuário precisa digitar, achar uma forma de formatar para todos os casos.
export default function Mask(props) {
  let lastWord = "";

  const countChar = (word) => {
    let replaced = word.replace(".", "").replace("-", "");

    return replaced.length;
  };

  const handleChangeInputCpf = (e) => {
    const limitForNextBeHifen = 11;
    const limitForNextBeHifenButWhenErase = 12;
    const isErasing = lastWord.length > e.target.value.length;
    let lastChar = e.target.value.slice(-1);
    if (!isErasing) {
      if (e.target.value.length === limitForNextBeHifen) {
        e.target.value += "-";
      } else if (e.target.value.length === limitForNextBeHifenButWhenErase) {
        e.target.value = lastWord + "-" + lastChar;
      } else {
        if (e.target.value.length < limitForNextBeHifen) {
          if (lastChar !== ".") {
            if (lastWord.length !== 0 && countChar(lastWord) % 3 === 0) {
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
