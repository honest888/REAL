import React from "react";

export default function NoteV() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-item-align-box">
          <fieldset disabled className="d-flex flex-column">
            <label htmlFor="" className="f-label fs-16 mb-2">
              Tipo di documento
            </label>
            <textarea
              rows="5"
              value="Cata d’identità"
              className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
            />
          </fieldset>
        </div>
      </div>
    </div>
  );
}
