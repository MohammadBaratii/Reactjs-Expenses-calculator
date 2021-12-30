import React from "react";
import { MdClear, MdErrorOutline } from "react-icons/md";

const Alert = ({ title, onClear }) => {
  return (
    <div className="alert">
      <MdErrorOutline className="alert__error-icon" />
      <h1>{title}</h1>
      <MdClear className="alert__clear" onClick={onClear} />
    </div>
  );
};

export default Alert;
