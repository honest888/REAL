import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
export default function () {
  return (
    <div className="form-outer-box d-block">
      <form action="">
        <div className="row">
          <div className="col-md-4">
            <div className="d-block bg-white py-5 px-4 w-100 rounded-3">
              <ul className="d-flex flex-column p-0 ls left-nav-form">
                <li>
                  <Link to="/">Aggiornamento ISTAT</Link>
                </li>
                <li>
                  <Link to="/" className="active">
                    Imposta di registro
                  </Link>
                </li>
                <li>
                  <Link to="/">Ravvedimento imposta di registro</Link>
                </li>
                <li>
                  <Link to="/">Ravvedimento imposta di bollo</Link>
                </li>
                <li>
                  <Link to="/">Interessi</Link>
                </li>
                <li>
                  <Link to="/">Reddito di fabbricato</Link>
                </li>
                <li>
                  <Link to="/">Operazioni con date</Link>
                </li>
                <li>
                  <Link to="/">Valore sulla nuda proprietà</Link>
                </li>
                <li>
                  <Link to="/">Acconto IMU</Link>
                </li>
                <li>
                  <Link to="/">Imposte compravendita</Link>
                </li>
                <li>
                  <Link to="/">Tasi</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-block bg-white py-5 px-4 w-100 rounded-3 mb-4">
              <h3 className="fs-20 text-dark mb-2 w-100 d-block">
                Tipo di registrazione
              </h3>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                  <Form.Check
                    inline
                    label="Registrazione del contratto d’affitto, della proroga o dell’annualità"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Registrazione della risoluzione"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Registrazione del subentro del conduttore"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Registrazione del contratto in comodato gratuito"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Registrazione di una proposta d’acquisto o preliminare di vendita"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}

              <div className="d-block mt-4">
                <button
                  type="submit"
                  className="submit-btn py-3 rounded-3 fs-16 fw-semibold border-0 w-192 text-center"
                >
                  Avanti
                </button>
              </div>
            </div>
            {/* section 2 */}
            <div className="d-block bg-white py-5 px-4 w-100 rounded-3 mb-4">
              <h3 className="fs-20 text-dark mb-2 w-100 d-block">
                Caparra confirmatoria o acconto?
              </h3>
              <h5 className="fs-16 text-dark mb-2 w-100 d-block">
                Oggetto della vendita
              </h5>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                  <Form.Check
                    inline
                    label="Registrazione del contratto d’affitto, della proroga o dell’annualità"
                    name="group2"
                    type={type}
                    id={`inline-${type}-6`}
                  />
                  <Form.Check
                    inline
                    label="Registrazione della risoluzione"
                    name="group2"
                    type={type}
                    id={`inline-${type}-7`}
                  />
                </div>
              ))}
              <h5 className="fs-16 text-dark mb-2 w-100 d-block">
                Tipo di importo versato
              </h5>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                  <Form.Check
                    inline
                    label="Caparra confirmatoria"
                    name="group3"
                    type={type}
                    id={`inline-${type}-8`}
                  />
                  <Form.Check
                    inline
                    label="Acconto sul prezzo di vendita"
                    name="group3"
                    type={type}
                    id={`inline-${type}-9`}
                  />
                  <Form.Check
                    inline
                    label="Caparra e Acconto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-10`}
                  />
                </div>
              ))}
              <h5 className="fs-16 text-dark mb-2 w-100 d-block">
                Acconto versato
              </h5>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Ivato"
                    name="group3"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                </div>
              ))}
              <div className="d-flex justify-content-between align-items-center w-237 border border-secondary rounded-3 p-2">
                <input type="text" className="px-3 py-1 fs-16 w-80 border-0" />
                <h4 className="fs-16 fw-semibold text-secondary ms-3 flex-shrink-0">
                  € 100,00
                </h4>
              </div>
              <div className="d-flex mt-4">
                <button
                  type="submit"
                  className="backwards-btn py-3 rounded-3 fs-16 fw-semibold border border-dark w-192 text-center me-3"
                >
                  Indietro
                </button>
                <button
                  type="submit"
                  className="submit-btn py-3 rounded-3 fs-16 fw-semibold border-0 w-192 text-center"
                >
                  Avanti
                </button>
              </div>
            </div>
            {/* section 3*/}
            <div className="d-block bg-white py-5 px-4 w-100 rounded-3 mb-4">
              <h3 className="fs-20 text-dark mb-2 w-100 d-block">
                Imposta di registro
              </h3>
              <div className="row mb-3">
                <div className="col-md-3">
                  <label htmlFor="" className="mb-3 text-secondary">
                    Codice
                  </label>
                  <div className="d-flex justify-content-between align-items-center w-100 border border-secondary rounded-3 p-2">
                    <input
                      type="text"
                      className="px-3 py-1 fs-16 w-100 border-0"
                      value="104T"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="" className="mb-3 text-secondary">
                    Importo
                  </label>
                  <div className="d-flex justify-content-between align-items-center w-100 border border-secondary rounded-3 p-2">
                    <input
                      type="text"
                      className="px-3 py-1 fs-16 w-100 border-0"
                    />
                    <h4 className="fs-16 fw-semibold text-secondary ms-3 flex-shrink-0">
                      € 200,00
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-3">
                  <div className="d-flex justify-content-between align-items-center w-100 border border-secondary rounded-3 p-2">
                    <input
                      type="text"
                      className="px-3 py-1 fs-16 w-100 border-0"
                      value="104T"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-between align-items-center w-100 border border-secondary rounded-3 p-2">
                    <input
                      type="text"
                      className="px-3 py-1 fs-16 w-100 border-0"
                    />
                    <h4 className="fs-16 fw-semibold text-secondary ms-3 flex-shrink-0">
                      € 0,50
                    </h4>
                  </div>
                </div>
              </div>
              <div className="d-flex my-4">
                <button
                  type="submit"
                  className="backwards-btn py-3 rounded-3 fs-16 fw-semibold border border-dark w-192 text-center me-3"
                >
                  Indietro
                </button>
                <button
                  type="submit"
                  className="bag-btn py-3 rounded-3 fs-16 fw-semibold border-0 w-192 text-center"
                >
                  Torna all’inizio
                </button>
              </div>

              <Link to="/" className="interest-link text-decoration-underline">
                Calcola eventuali sanzioni e interessi
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
