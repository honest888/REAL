import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import PrintDwonloadIcons from "./PrintDwonloadIcons";

export default function AnagraficaV() {
  return (
    <>
      <PrintDwonloadIcons />
      <div className="row">
        <div className="col-12">
          <div className="form-item-align-box">
            <div className="row gy-4">
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value="Carla"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Cognome
                  </label>
                  <input
                    type="text"
                    value="Colombo"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Data di nascita*
                  </label>
                  <div className="d-flex align-items-center justify-content-between border position-relative border-secondary rounded-3 border-opacity-50">
                    <input
                      type="text"
                      value="12/11/1969"
                      className="form-control border-0 fs-16 text-dark flex-grow-1"
                    />
                    <span className="flex-shrink-0 position-absolute mt-1 end-0 me-3">
                      <BsCalendar2Event />
                    </span>
                  </div>
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Stato
                  </label>
                  <input
                    type="text"
                    value="Italia"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Comune
                  </label>
                  <input
                    type="text"
                    value="Genova"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Provincia
                  </label>
                  <input
                    type="text"
                    value="GE"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Codice fiscale
                  </label>
                  <input
                    type="text"
                    value="CLMCRL69TRFRJ87P"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Sesso
                  </label>
                  <input
                    type="text"
                    value="Femmina"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
