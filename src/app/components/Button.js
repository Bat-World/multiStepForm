import React from "react";


export const Button = (props) => {
  const { text, handleBackPage, handleNextPage, className } = props;
  return (
    <button onClick={handleNextPage} className={className}>
      {text}
    </button>
  );
};
