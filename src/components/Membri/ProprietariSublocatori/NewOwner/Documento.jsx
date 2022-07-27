import React from "react";
import "../style.css";
import { BsCalendar2Event } from "react-icons/bs";
import Form from "react-bootstrap/Form";

export default function Documento() {
  return (
    <div className="d-block w-100 mb-3">
      <Form>
        <div className="form-item-align-box d-block">
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipo di documento
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Numero
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Rilasciato dal/la
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Data di rilascio
                </label>
                <div className="d-flex align-items-center justify-content-between border border-secondary px-3 rounded-3 border-opacity-50">
                  <input
                    type="text"
                    className="border-0 fs-16 text-dark flex-grow-1"
                  />
                  <span className="flex-shrink-0">
                    <BsCalendar2Event />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Scadenza del documento
                </label>
                <div className="d-flex align-items-center justify-content-between border border-secondary px-3 rounded-3 border-opacity-50">
                  <input
                    type="text"
                    className="border-0 fs-16 text-dark flex-grow-1"
                  />
                  <span className="flex-shrink-0">
                    <BsCalendar2Event />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Cittadinanza
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center mt-5 form-last-btns">
                <button
                  type="button"
                  className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
                >
                  Annulla
                </button>
                <button
                  type="button"
                  className="next-btn btn-last rounded-3 shadow w-193 border-0"
                >
                  Avanti
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
