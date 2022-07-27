import React from "react";
import "../style.css";
import { BsCalendar2Event } from "react-icons/bs";
import Form from "react-bootstrap/Form";

export default function Note() {
  return (
    <div className="d-block w-100 mb-3">
      <Form>
        <div className="form-item-align-box d-block">
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Inserisci note
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 w-100"
                ></textarea>
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
