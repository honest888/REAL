import React from "react";
import "../style.css";
import { BsCalendar2Event } from "react-icons/bs";
import Form from "react-bootstrap/Form";
export default function Anagrafica() {
  return (
    <div className="d-block w-100 mb-3">
      <Form>
        <div className="form-item-align-box d-block">
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                TIPO
              </h1>
            </div>
          </div>
          <div className="d-block">
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  default
                  className="mb-2"
                  label="Persona fisica"
                  name="group1"
                  type={type}
                  id={`default-${type}-1`}
                />
                <Form.Check
                  default
                  className="mb-2"
                  label="Società od altri soggetti"
                  name="group1"
                  type={type}
                  id={`default-${type}-2`}
                />
              </div>
            ))}
          </div>

          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                PERSONA FISICA
              </h1>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Name*
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
                  Cognome*
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
                  Data di nascita*
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
                  Stato di nascita*
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
                  Comune di nascita*
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
                  Provincia *
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
                  Codice fiscale*
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
                  Sesso*
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
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
