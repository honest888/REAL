import React from "react";

export default function UnitaE() {
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
            </div>
          </div>
          <div className="col-md-6">
            <div className="popup-blue d-block overflow-hidden rounded-3">
              <div className="blue-popup-header d-flex align-items-center justify-content-between p-2">
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
    </>
  );
}
