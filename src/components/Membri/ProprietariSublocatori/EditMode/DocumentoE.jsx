import React from "react";
import { Form } from "react-bootstrap";
import { BsCalendar2Event } from "react-icons/bs";
export default function DocumentoE() {
  return (
    <>
      <Form>
        <div className="row">
          <div className="col-12">
            <div className="form-item-align-box">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      Tipo di documento
                    </label>
                    <input
                      type="text"
                      value="Cata d’identità"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      Numero
                    </label>
                    <input
                      type="text"
                      value="AY654890"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
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
                      value="AY654890"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      Data di rilascio
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
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      Scadenza del documento
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
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      Cittadinanza
                    </label>
                    <input
                      type="text"
                      value="Italia"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
