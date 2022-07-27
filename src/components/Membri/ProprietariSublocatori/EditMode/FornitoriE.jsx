import React, { useState } from "react";
import cardimage from "../../../../assets/images/user-person.png";
import { BsCalendar2Event } from "react-icons/bs";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function FornitoriE() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="form-item-align-box d-block">
        <div className="row gy-4">
          <div className="col-12">
            <div className="d-flex align-items-center form-last-btns">
              <button
                type="button"
                className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
              >
                Nuovo
              </button>
              <button
                type="button"
                onClick={handleShow}
                className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
              >
                Seleziona
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="popup-yellow d-block overflow-hidden rounded-3">
              <div className="yellow-popup-header d-flex align-items-center justify-content-between p-2">
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
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="acc-table-box"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body className="p-5">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="float-end bg-white border-0 text-dark"
          >
            <i className="fal fa-times"></i>
          </Button>
          <h2 className="top-form-heading d-block mb-4 fs-32 text-dark fw-semibold">
            Seleziona uno o più fornitori
          </h2>
          <div className="search-fence d-flex align-items-center bg-white p-2 border-opacity-50 border-secondary border rounded-3 overflow-hidden">
            <i className="fal fa-search flex-shrink-0 me-2 text-secondary opacity-50"></i>
            <input
              type="text"
              name=""
              className="flex-grow-1 border-0 w-100 fs-14"
            />
          </div>
          <table className="table my-4 acc-list-table">
            <thead>
              <tr>
                <th className="">Categoria</th>
                <th className="">Denominazione</th>
                <th className="">Telefono</th>
                <th className="">Tipo di soggetto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Idraulico</td>
                <td>Dario Verdi</td>
                <td>010384488</td>
                <td>Ditta individuale</td>
              </tr>
              <tr>
                <td>Notaio</td>
                <td>Gaetani Aldi</td>
                <td>018283u9</td>
                <td>Ditta individuale</td>
              </tr>
            </tbody>
          </table>
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
              Salva
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
