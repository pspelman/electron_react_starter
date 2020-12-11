import React from "react";

export default function ViewTitle({text}) {
  return (
    <div className="electron-app-name-container">
      <span className="name">{text}</span>
    </div>
  )
}