import React from "react";
import "./style.css";
import { BsCalendar2Event } from "react-icons/bs";
import Form from "react-bootstrap/Form";

export default function DocumentiModal() {
  const Tipo_di_movimento = [
    "bollette",
    "canone",
    "cauzione",
    "competenze di gestione",
    "conguaglio fatturato",
    "consumi",
    "costi fissi per locazione",
    "diritti di segreteria",
    "imposta di registro",
    "imposta di soggiorno",
    "interessi",
    "interessi di mora",
    "marca da bollo",
    "marca da bollo da ordinare",
    "mediazione",
    "pagamento",
    "pagamento assicurazione",
    "pagamento fornitore",
    "piano di rientro",
    "ritenuta",
    "rivalsa cassa previdenziale",
    "sanzioni",
    "sconto canone in scaletta",
    "spese condominiali",
    "spese d’incasso",
    "spese di registrazione",
    "spese di registrazione contratti",
    "trasferimento di denaro",
    "trattenuta sulla cauzione",
  ];

  const Metodo_di_pagamento = [
    "Accredito su conto corrente",
    "addebito su conto corrente",
    "assegno",
    "bancomat",
    "bollettino freccia",
    "bollettino postale",
    "bonifico",
    "carta di credito",
    "cessione del credito d’imposta",
    "compensazione finanziaria",
    "contanti",
    "giroconto",
    "Mav",
    "paypal",
    "rav",
    "ri.ba",
    "rid",
    "sdd ( sepa direct debit)",
    "vaglia cambiario",
    "vaglia postale",
  ];
  return (
    <div className="d-block w-100 mb-3">
      <div>
        <h2 className="fs-20 text-dark mb-2 fw-bold">Nuova Prima Nota</h2>
      </div>
      <Form>
        <div className="form-item-align-box d-block">
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                TIPOLOGIA
              </h1>
            </div>
          </div>
          <div className="d-block">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipologia
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>MOVIMENTO</option>
                  <option>VERSAMENTO TRA CASSA E CONTO</option>
                  <option>PRELIEVO DA CONTO IN CASSA</option>
                  <option>TRASFERIMENTO TRA CONTI BANCARI</option>
                  <option>ACCONTO DATO AD UN LOCATORE</option>
                  <option>ACCONTO RICEVUTO DA UN LOCATORE</option>
                </select>
              </div>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                MOVIMENTO
              </h1>
            </div>
          </div>
          <div className="d-block">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Tipo di movimento
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  {Tipo_di_movimento.map((menu, index) => {
                    return <option value={index}>{menu}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="d-block">
            <div className="col-md-7">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2 mt-3">
                  Descrizione dell’operazione
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                DATE
              </h1>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Data di rilascio
                </label>
                <div className="d-flex align-items-center justify-content-between border border-secondary px-3 rounded-3 border-opacity-50">
                  <Form.Control
                    className="border-0 fs-16 text-dark flex-grow-1"
                    type="date"
                  ></Form.Control>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Inizio Competenza
                </label>
                <div className="d-flex align-items-center justify-content-between border border-secondary px-3 rounded-3 border-opacity-50">
                  <Form.Control
                    className="border-0 fs-16 text-dark flex-grow-1"
                    type="date"
                  ></Form.Control>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Fine Competenza
                </label>
                <div className="d-flex align-items-center justify-content-between border border-secondary px-3 rounded-3 border-opacity-50">
                  <Form.Control
                    className="border-0 fs-16 text-dark flex-grow-1"
                    type="date"
                  ></Form.Control>
                </div>
              </div>
            </div>
          </div>
          {/* ////////////////////////date/////////////////////////// */}
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                TIPOLOGIA
              </h1>
            </div>
          </div>
          <div className="d-block col-md-12">
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3 d-flex">
                <Form.Check
                  default
                  className="mb-2 col-md-3"
                  label="Importo in entrata"
                  name="group1"
                  type={type}
                  id={`default-${type}-1`}
                />
                <Form.Check
                  default
                  className="mb-2 col-md-3"
                  label="Importo in uscita"
                  name="group1"
                  type={type}
                  id={`default-${type}-2`}
                />
              </div>
            ))}
          </div>
          {/* ////////////////////////////// */}
          <div className="row gy-4">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Imponibile
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
                  Codice IVA
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
                  Metodo di pagamento
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  {Metodo_di_pagamento.map((menu, index) => {
                    return <option value={index}>{menu}</option>;
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <label htmlFor="" className="f-label fs-16 mb-2">
                  Risorsa contabile
                </label>
                <select className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50 bg-white">
                  <option>Select</option>
                  <option>Select</option>
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                TIPOLOGIA
              </h1>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center mt-5 form-last-btns">
              <button
                type="button"
                className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
              >
                Nuovo
              </button>
              <button
                type="button"
                className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
              >
                Seleziona
              </button>
            </div>
          </div>
          <div className="label-heading my-4 d-block w-100">
            <div className="label-text rel d-inline-block py-2 px-2">
              <h1 className="fs-16 text-white text-uppercase fw-semibold">
                ALLEGATI
              </h1>
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
      </Form>
    </div>
  );
}

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import "./style.css";
// import cardimage from "../../assets/images/empty-folder.png";
// import iconimg1 from "../../assets/images/edit.png";
// import iconimg2 from "../../assets/images/trash.png";
// import Form from "react-bootstrap/Form";

// export default function DocumentiModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <div className="d-block w-100 mb-3">
//         <Form>
//           <div className="form-item-align-box d-block">
//             <div className="row gy-4">
//               <div className="col-12">
//                 <div className="d-flex align-items-center mt-5 form-last-btns">
//                   <button
//                     type="button"
//                     className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
//                   >
//                     Seleziona
//                   </button>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="mx-auto d-table text-center">
//                   <div className="image-user mx-auto d-table w-160 fw-100">
//                     <img src={cardimage} alt="user-key" />
//                   </div>
//                   <p className="fs-20 text-secondary text-center">
//                     Non hai aggiunto alcun allegato
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="d-flex align-items-center justify-content-between p-3 rounded-3 border border-secondary border-opacity-50">
//                   <h4 className="fs-16 text-dark fw-semibold">file.pdf</h4>
//                   <div className="d-flex align-items-center edit-delete-btns">
//                     <button
//                       type="button"
//                       onClick={handleShow}
//                       className="border-0 me-2 w-35 h-35 rounded-circle"
//                     >
//                       <img src={iconimg1} alt="edit-icon" />
//                     </button>
//                     <button
//                       type="button"
//                       className="border-0  w-35 h-35 rounded-circle"
//                     >
//                       <img src={iconimg2} alt="delete-icon" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="d-flex align-items-center mt-5 form-last-btns">
//                   <button
//                     type="button"
//                     className="back-btn btn-last rounded-3 shadow w-193 me-2 border-0"
//                   >
//                     Annulla
//                   </button>
//                   <button
//                     type="button"
//                     className="next-btn btn-last rounded-3 shadow w-193 border-0"
//                   >
//                     Avanti
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Form>
//       </div>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Body className="p-5">
//           <div className="d-flex flex-column">
//             <h2 className="fs-32 text-dark fw-semibold mb-3">
//               Rinomina documento
//             </h2>
//             <Form className="form-item-align-box">
//               <div className="d-flex flex-column mb-3">
//                 <label htmlFor="" className="f-label fs-16 mb-2">
//                   Name*
//                 </label>
//                 <input
//                   type="text"
//                   value="file"
//                   className="border border-secondary fs-16 text-dark rounded-3 border-opacity-50"
//                 />
//               </div>
//             </Form>
//             <button
//               type="button"
//               className="confirm-btn mb-2 rounded-3 fs-16 py-2 w-100 border-0 text-white"
//             >
//               Rinomina
//             </button>
//             <button
//               type="button"
//               className="cancel-btn rounded-3 fs-16 py-2 w-100 border-0 text-dark bg-white"
//               onClick={handleClose}
//             >
//               Annulla
//             </button>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
