import React from "react";
import { BsPrinter, BsDownload } from "react-icons/bs";

export default function PrintDwonloadIcons() {
  return (
    <div className="d-flex mb-3">
      <button
        type="button"
        className="bg-white text-dark border border-secondary rounded-3 p-1 w-40 h-40 me-2"
      >
        <BsPrinter />
      </button>
      <button
        type="button"
        className="bg-white text-dark border border-secondary rounded-3 p-1 w-40 h-40"
      >
        <BsDownload />
      </button>
    </div>
  );
}
