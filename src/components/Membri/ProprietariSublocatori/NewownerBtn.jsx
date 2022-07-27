import React, { useState } from "react";
import "./style.css";
import imageLight from "../../../assets/images/lightimg.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TabForm from "./NewOwner/TabForm";

const NewownerBtn = (props) => {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex flex-row-reverse mb-3">
        <div className="d-flex align-items-center">
          <h6 className="flex-grow-1 fs-14 text-dark fw-light">MARIO ROSSI</h6>
          <div className="img-light flex-shrink-0 w-26 h-26 fw-100 ms-3">
            <img src={imageLight} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex align-item-center">
        <div className="flex-shrink-0">
          <button
            className="owner-btn border-0 rounded-3 fs-16"
            onClick={handleShow}
          >
            {props.btnText}
          </button>
        </div>
        <div className="flex-grow-1 ms-3">
          <div className="search-fence d-flex align-items-center bg-white p-2 border-opacity-50 border-secondary border rounded-3 overflow-hidden">
            <i className="fal fa-search flex-shrink-0 me-2 text-secondary opacity-50"></i>
            <input
              type="text"
              name=""
              placeholder="Cerca"
              className="flex-grow-1 border-0 w-100 fs-14"
            />
          </div>
        </div>
      </div>

      <Modal
        show={show}
        fullscreen={fullscreen}
        className="right-full-pop"
        onHide={handleClose}
      >
        <Modal.Body className="p-5">
          <Button
            variant=""
            onClick={handleClose}
            className="float-end border-0 bg-white"
          >
            <i className="fal fa-times"></i>
          </Button>
          <TabForm />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewownerBtn;
