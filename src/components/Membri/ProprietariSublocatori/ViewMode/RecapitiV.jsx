import React from "react";
import PrintDwonloadIcons from "./PrintDwonloadIcons";

export default function RecapitiV() {
  return (
    <>
      <PrintDwonloadIcons />
      <div className="label-heading my-4 d-block w-100">
        <div className="label-text rel d-inline-block py-2 px-2">
          <h1 className="fs-16 text-white text-uppercase fw-semibold">
            RESIDENZA
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-item-align-box">
            <div className="row gy-4">
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Indirizzo (Via/V.le/Piazza/Corso ecc)
                  </label>
                  <input
                    type="text"
                    value="via dromo"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Civico
                  </label>
                  <input
                    type="text"
                    value="12"
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
            </div>
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
      <div className="row">
        <div className="col-12">
          <div className="form-item-align-box">
            <div className="row gy-4">
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Presso
                  </label>
                  <input
                    type="text"
                    value="via dromo"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Indirizzo (Via/V.le/Piazza/Corso ecc)
                  </label>
                  <input
                    type="text"
                    value="12"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>

              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Civico
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
                    Comune
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
                    Provincia
                  </label>
                  <input
                    type="text"
                    value="GE"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
            </div>
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
      <div className="row">
        <div className="col-12">
          <div className="form-item-align-box">
            <div className="row gy-4">
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Telefono casa
                  </label>
                  <input
                    type="text"
                    value="3333333333"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Telefono ufficio
                  </label>
                  <input
                    type="text"
                    value="3333333333"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>

              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Telefono cellulare
                  </label>
                  <input
                    type="text"
                    value="555555555"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Fax
                  </label>
                  <input
                    type="text"
                    value="999899999"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Skype
                  </label>
                  <input
                    type="text"
                    value="Skypeid"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="label-heading my-4 d-block w-100">
        <div className="label-text rel d-inline-block py-2 px-2">
          <h1 className="fs-16 text-white text-uppercase fw-semibold">
            POSTA ELETTRONICA
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-item-align-box">
            <div className="row gy-4">
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Email per notifiche
                  </label>
                  <input
                    type="text"
                    value="carla.colombo@gmail.com"
                    className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                  />
                </fieldset>
              </div>
              <div className="col-md-6">
                <fieldset disabled className="d-flex flex-column">
                  <label htmlFor="" className="f-label fs-16 mb-2">
                    Email posta certificata (PEC)
                  </label>
                  <input
                    type="text"
                    value="carla.colombo@gmail.com"
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
