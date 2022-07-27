import React from "react";
import { BsCalendar2Event, BsFillPlusCircleFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";
export default function RecapitiE() {
  return (
    <div className="d-block w-100 mb-3">
      <Form>
        <div className="form-item-align-box d-block">
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                RESIDENZA
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Indirizzo (Via/V.le/Piazza/Corso ecc)
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
                  Civico
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
                  Comune
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
                  Provincia
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                INDIRIZZO DI CORRISPONDENZA
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Presso <i className="fal fa-exclamation-circle"></i>
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
                  Indirizzo (Via/V.le/Piazza/Corso ecc)
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
                  Civico
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
                  Comune
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
                  Provincia
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                RECAPITI TELEFONICI
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Telefono casa
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
                  Telefono ufficio
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
                  Telefono cellulare
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
                  Fax
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
                  Skype
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                className="other-contact p-0 text-dark fs-16 bg-transparent border-0 fw-semibold"
              >
                <BsFillPlusCircleFill /> Aggiungi altri recapiti
              </button>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                POSTA ELETTRONICA
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Email per notifiche
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
                  Email posta certificata (PEC)
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </div>
            {/* <div className="col-12">
              <button
                type="button"
                className="other-contact p-0 text-dark fs-16 bg-transparent border-0 fw-semibold"
              >
                <BsFillPlusCircleFill /> Aggiungi altre email
              </button>
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
            </div> */}
          </div>
        </div>
      </Form>
    </div>
  );
}
