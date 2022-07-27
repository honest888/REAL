import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
export default function TopHeadPartV() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex flex-column flex-md-row
       justify-content-between align-items-md-end"
      >
        <div className="flex-grow-1">
          <div className="d-flex flex-column">
            <Link to="/propriietari" className="text-dark fs-14">
              <i className="fal fa-long-arrow-left"></i> Torna alla lista
              proprietari
            </Link>
            <h3 className="fs-24 fs-md-30 text-dark fw-semibold mt-3 mb-3 mb-md-0">
              Carla Colombo
            </h3>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="d-flex align-items-center">
            <Link
              to="/propriietari-edit"
              className="modi-btn fs-16 text-white rounded-3 w-197 text-center py-2 px-3 me-2"
            >
              Modifica
            </Link>
            <button
              type="button"
              onClick={handleShow}
              className="border border-secondary bg-white text-secondary rounded-3 py-2 px-3"
            >
              <BsTrash />
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-5">
          <div className="d-flex flex-column text-center">
            <h2 className="fs-32 text-dark fw-semibold mb-3">
              Vuoi eliminare questo proprietario?
            </h2>
            <h6 className="fs-16 text-dark fw-normal mb-3">
              Questa azione è irreversibile
            </h6>
            <button
              type="button"
              className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
            >
              Conferma
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
