import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCalendar2Event } from "react-icons/bs";
import iconprint from "../../../../assets/images/Print_light.svg";
import iconedit from "../../../../assets/images/Edit_light.svg";
import icondelete from "../../../../assets/images/Trash_light.svg";
import Form from "react-bootstrap/Form";
export default function CorrentiE() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);

  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <>
      <div className="form-item-align-box d-block">
        <div className="row gy-4">
          <div className="col-12">
            <div className="d-flex align-items-center form-last-btns">
              <button
                onClick={handleShow}
                type="button"
                className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
              >
                Nuovo
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="popup-green d-block overflow-hidden rounded-3 cur"
              onClick={handleShow1}
            >
              <div className="green-popup-header d-flex align-items-center justify-content-between p-2">
                <h3 className="fs-16 text-white fw-semibold">Conto corrente</h3>
                <button
                  type="button"
                  className="border-0 bg-transparent text-white"
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
              <div className="table-list d-block">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        IBAN
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        IT6465U948U894U94U9
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        INTESTATO A
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        Mario Rossi
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        BANCA
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        Banca Intesa
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        ABI
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        186
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        CAB
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        3456
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        CIN
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        677
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        CONTO
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        76894
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        BIC/SWIFT
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        30
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        Codice SIA
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        052
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        agenzia
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        Genova
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase fs-14 text-secondary px-3">
                        sepa cuc
                      </td>
                      <td className="text-capitalize fs-14 text-dark px-3">
                        kwdnknwl
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div className="col-12">
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
      <Modal
        show={show}
        fullscreen={fullscreen}
        className="right-full-pop"
        onHide={handleClose}
      >
        <Modal.Body className="p-5">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className="fs-16 py-2 border-0 text-dark bg-white"
                onClick={handleClose}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            <h2 className="fs-32 text-dark fw-semibold mb-3">
              Nuova risorsa contabile
            </h2>
            <Form className="form-item-align-box">
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipo
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="d-flex dev-date position-relative my-4">
                <h3 className="fs-16 text-dark text-uppercase flex-shrink-0 me-2">
                  DATI DEL CONTO
                </h3>
                <div className="border-top border-secondary flex-grow-1 mt-2"></div>
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  IBAN
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Intestazione
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Banca
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Agenzia/Comune
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Provincia
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="row gy-4">
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      ABI
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CAB
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CONTO
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CIN
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      BIC/SWIFT
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice SIA
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice CUC SEPA
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <button
                type="button"
                className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
              >
                Salva
              </button>
              <button
                type="button"
                className="cancel-btn rounded-3 fs-16 py-2 w-100 border-0 text-dark bg-white"
                onClick={handleClose}
              >
                Annulla
              </button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      {/* only read form popup */}
      <Modal
        id="editForm"
        show={show1}
        fullscreen={fullscreen}
        className="right-full-pop formEdit"
        onHide={handleClose1}
      >
        <Modal.Body className="p-5">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className="fs-16 py-2 border-0 text-dark bg-white"
                onClick={handleClose1}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <h2 className="fs-32 text-dark fw-semibold mb-3">
                Visualizza risorsa contabile
              </h2>
              <div className="icon-right-popup">
                <button
                  type="button"
                  className="bg-white w-40 h-40 w-40 rounded-3 border border-secondary p-1 me-2"
                >
                  <img src={iconprint} alt="icon-butn" />
                </button>
                <button
                  id="editBtn"
                  onClick={handleShow2}
                  type="button"
                  className="bg-white w-40 h-40 w-40 rounded-3 border border-secondary p-1 me-2"
                >
                  <img src={iconedit} alt="icon-butn" />
                </button>
                <button
                  type="button"
                  className="bg-white w-40 h-40 w-40 rounded-3 border border-secondary p-1"
                >
                  <img src={icondelete} alt="icon-butn" />
                </button>
              </div>
            </div>

            <Form className="form-item-align-box">
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  value="Mario rossi"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipo
                </label>
                <select className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>cc bancario</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </fieldset>
              <div className="d-flex dev-date position-relative my-4">
                <h3 className="fs-16 text-dark text-uppercase flex-shrink-0 me-2">
                  DATI DEL CONTO
                </h3>
                <div className="border-top border-secondary flex-grow-1 mt-2"></div>
              </div>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  IBAN
                </label>
                <input
                  type="text"
                  value="IT6494958674636363"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Intestazione
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Banca
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Agenzia/Comune
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Provincia
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <div className="row gy-4">
                <div className="col-md-2">
                  <fieldset disabled className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      ABI
                    </label>
                    <input
                      type="text"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </fieldset>
                </div>
                <div className="col-md-2">
                  <fieldset disabled className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CAB
                    </label>
                    <input
                      type="text"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset disabled className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CONTO
                    </label>
                    <input
                      type="text"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </fieldset>
                </div>
                <div className="col-md-2">
                  <fieldset disabled className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CIN
                    </label>
                    <input
                      type="text"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </fieldset>
                </div>
                <div className="col-md-3">
                  <fieldset disabled className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      BIC/SWIFT
                    </label>
                    <input
                      type="text"
                      className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </fieldset>
                </div>
              </div>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice SIA
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              <fieldset disabled className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice CUC SEPA
                </label>
                <input
                  type="text"
                  className="form-control border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </fieldset>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    disabled
                    type={type}
                    label={`Conto disabilitato ${type}`}
                    id={`disabled-default-${type}`}
                  />
                </div>
              ))}
              {/* <button
                type="button"
                className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
              >
                Salva
              </button>
              <button
                type="button"
                className="cancel-btn rounded-3 fs-16 py-2 w-100 border-0 text-dark bg-white"
                onClick={handleClose}
              >
                Annulla
              </button> */}
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* edit form popup */}
      <Modal
        show={show2}
        fullscreen={fullscreen}
        className="right-full-pop"
        onHide={handleClose2}
      >
        <Modal.Body className="p-5">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className="fs-16 py-2 border-0 text-dark bg-white"
                onClick={handleClose2}
              >
                <i className="fal fa-times"></i>
              </button>
            </div>
            <h2 className="fs-32 text-dark fw-semibold mb-3">
              Modifica risorsa contabile
            </h2>

            <Form className="form-item-align-box">
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipo
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
              <div className="d-flex dev-date position-relative my-4">
                <h3 className="fs-16 text-dark text-uppercase flex-shrink-0 me-2">
                  DATI DEL CONTO
                </h3>
                <div className="border-top border-secondary flex-grow-1 mt-2"></div>
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  IBAN
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Intestazione
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Banca
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Agenzia/Comune
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Provincia
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="row gy-4">
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      ABI
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CAB
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CONTO
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      CIN
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="d-flex flex-column mb-3">
                    <label htmlFor="" className="f-label fs-16 mb-2">
                      BIC/SWIFT
                    </label>
                    <input
                      type="text"
                      className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice SIA
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Codice CUC SEPA
                </label>
                <input
                  type="text"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
              <button
                type="button"
                className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
              >
                Salva
              </button>
              <button
                type="button"
                className="cancel-btn rounded-3 fs-16 py-2 w-100 border-0 text-dark bg-white"
                onClick={handleClose}
              >
                Annulla
              </button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
