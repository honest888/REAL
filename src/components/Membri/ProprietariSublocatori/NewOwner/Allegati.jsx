import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style.css";
import cardimage from "../../../../assets/images/empty-folder.png";
import iconimg1 from "../../../../assets/images/edit.png";
import iconimg2 from "../../../../assets/images/trash.png";
import Form from "react-bootstrap/Form";

export default function Allegati() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-block w-100 mb-3">
        <Form>
          <div className="form-item-align-box d-block">
            <div className="row gy-4">
              <div className="col-12">
                <div className="d-flex align-items-center mt-5 form-last-btns">
                  <button
                    type="button"
                    className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
                  >
                    Seleziona
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="mx-auto d-table text-center">
                  <div className="image-user mx-auto d-table w-160 fw-100">
                    <img src={cardimage} alt="user-key" />
                  </div>
                  <p className="fs-20 text-secondary text-center">
                    Non hai aggiunto alcun allegato
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center justify-content-between p-3 rounded-3 border border-secondary border-opacity-50">
                  <h4 className="fs-16 text-dark fw-semibold">file.pdf</h4>
                  <div className="d-flex align-items-center edit-delete-btns">
                    <button
                      type="button"
                      onClick={handleShow}
                      className="border-0 me-2 w-35 h-35 rounded-circle"
                    >
                      <img src={iconimg1} alt="edit-icon" />
                    </button>
                    <button
                      type="button"
                      className="border-0  w-35 h-35 rounded-circle"
                    >
                      <img src={iconimg2} alt="delete-icon" />
                    </button>
                  </div>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-5">
          <div className="d-flex flex-column">
            <h2 className="fs-32 text-dark fw-semibold mb-3">
              Rinomina documento
            </h2>
            <Form className="form-item-align-box">
              <div className="d-flex flex-column mb-3">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  value="file"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                />
              </div>
            </Form>
            <button
              type="button"
              className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
            >
              Rinomina
            </button>
            <button
              type="button"
              className="cancel-btn rounded-3 fs-16 py-2 w-100 border-0 text-dark bg-white"
              onClick={handleClose}
            >
              Annulla
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
