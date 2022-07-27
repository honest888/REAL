import React from "react";

export default function NoteE() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-item-align-box">
          <div className="d-flex flex-column">
            <label htmlFor="" className="f-label fs-16 mb-2">
              Inserisci note
            </label>
            <textarea
              rows="5"
              value=""
              className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
