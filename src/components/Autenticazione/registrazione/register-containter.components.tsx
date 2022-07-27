import { Form, Formik } from "formik";
import { Component, ReactNode, useRef } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import RegisterStep2 from "./register-step-2.component";
import RegisterStep3 from "./register-step-3.component";
import RegisterStep4 from "./register-step-4.component";
import RegisterStep5 from "./register-step-5.component";
import RegisterStep6 from "./register-step-6.component";
import Register from "./register.component";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import { IFormValues } from "../types/form-values.type";
import VerificaCodice from "../reset_password/verifica-codice";
import { Button, Stepper, Title } from "@mantine/core";
import { CircleCheck } from "tabler-icons-react";
import React from "react";

type Props = {};

type State = {
  openModal: boolean;
  successful: boolean;
  message: string;
  codice: string;
  formToSend: IFormValues;
  page: number;
};

export default class RegisterContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleValueCodice = this.handleValueCodice.bind(this);

    this.state = {
      formToSend: {
        username: "",
        password: "",
        phone: "",
        email: "",
        name: "",
        surname: "",
        fiscalCode: "",
        genre: "",
        birthday: "",
        address: "",
        houseNumber: "",
        province: "",
        municipality: "",
        cap: "",
        issueEntity: "",
        documentType: "",
        issueDate: "",
        documentNumber: "",
        issuePlace: "",
        terminiCondizioni: false,
        statutoPrivacy: false,
        faceFile: "fake",
        role: 1,
      },
      page: 0,
      message: "",

      openModal: false,

      successful: false,
      codice: "",
    };
  }
  //Decidere se settare lo state, fare la chiamate a handle click e metterla in attesa della risposta, salvare tutto i=nel saervice e poi fare la chiamata
  handleSubmit(formValue: IFormValues) {
    console.log("Value", formValue);
    AuthService.signUp(formValue).then(
      (response) => {
        console.log("dentro", response);
        this.setState({
          formToSend: formValue,
          message: response.data.message,
          successful: true,
          //response.data.message.return_value
          openModal: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }

  handleClickModal(): boolean {
    this.setState({
      openModal: !this.state.openModal,
    });
    return this.state.openModal;
  }

  handleValueCodice(code: string): void {
    this.setState({
      codice: code,
    });
    /*  AuthService.signUpVerify() */
    AuthService.signUpVerify(this.state.formToSend, code).then(
      (response) => {
        console.log("response:", response.data);
        if (response.data?.return_value) {
          this.setState({
            openModal: false,
          });
          let navigate = useNavigate();
          navigate("/login", { replace: true });
          //Redirect alla dashboard
        } else {
          //Errore nel form, gestirlo in qualche maniera
        }
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "Il name utente deve essere tra i 3 e 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required("Campo obbligatorio"),
      email: Yup.string()
        .email("Email non valida")
        .required("Campo obbligatorio"),
      confEmail: Yup.string()
        .oneOf([Yup.ref("email"), null, "Le email non corrispondono"])
        .email("Email non valida")
        .required("Campo obbligatorio"),
      password: Yup.string()
        .test(
          "len",
          "La password deve essere tra i 6 e i 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("Campo obbligatorio"),
      confPassword: Yup.string()
        .test(
          "len",
          "La password deve essere tra i 6 e i 20 caratteri.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .oneOf([Yup.ref("password"), null], "Le password non corrispondono")
        .required("Campo obbligatorio"),
      name: Yup.string().required("Campo obbligatorio"),
      surname: Yup.string().required("Campo obbligatorio"),
      fiscalCode: Yup.string()
        .matches(
          /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/,
          "Codice fiscale errato"
        )
        .required("Campo obbligatorio"),
      genre: Yup.string().required("Campo obbligatorio"),
      birthday: Yup.date().required("Campo obbligatorio"),
      address: Yup.string().required("Campo obbligatorio"),
      houseNumber: Yup.string().required("Campo obbligatorio"),
      province: Yup.string().required("Campo obbligatorio"),
      municipality: Yup.string().required("Campo obbligatorio"),
      cap: Yup.string()
        .matches(/^[0-9]{5}$/, "Inserisci un CAP corretto")
        .required("Campo obbligatorio"),
      issueEntity: Yup.string().required("Campo obbligatorio"),
      documentType: Yup.string().required("Campo obbligatorio"),
      issueDate: Yup.date().required("Campo obbligatorio"),
      documentNumber: Yup.string().required("Campo obbligatorio"),
      issuePlace: Yup.string().required("Campo obbligatorio"),
      terminiCondizioni: Yup.boolean().required("Campo obbligatorio"),
      statutoPrivacy: Yup.boolean().required("Campo obbligatorio"),
    });
  }
  //fare le chimate qui ceh devono essere fatte dopo l'inizializzazione del componente
  componentDidMount() {}

  render(): ReactNode {
    const initialValues = {
      username: "",
      phone: "",
      email: "",
      password: "",
      name: "",
      surname: "",
      fiscalCode: "",
      genre: "",
      birthday: "",
      address: "",
      houseNumber: "",
      province: "",
      municipality: "",
      cap: "",
      issueEntity: "",
      documentType: "",
      issueDate: "",
      documentNumber: "",
      issuePlace: "",
      terminiCondizioni: false,
      statutoPrivacy: false,
      faceFile: "fake",
      role: 1,
      page: 0,
      /*  successful: false,
            message: "", */
    };

    return (
      <div>
        <Title mb={40} mt={20} style={{ textAlign: "center" }} order={1}>
          Crea il tuo account
        </Title>
        <Stepper
          color="red"
          radius="md"
          size="md"
          active={1}
          completedIcon={<CircleCheck />}
          mb={40}
        >
          <Stepper.Step label="Registrazione" />

          <Stepper.Step label="Dati personali" />
          <Stepper.Step label="Documenti" />
          <Stepper.Step label="Statuto, foro e Consensi" />
          <Stepper.Step label="Face ID" />
          <Stepper.Step label="Riepilogo" />
        </Stepper>
        <Formik
          //Da trasformare in interfaccia
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={this.validationSchema}
        >
          {({ values }) => (
            <Form>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/register/step1/" replace />}
                />
                <Route path="/step1/" element={<Register />} />
                <Route path="/step2/" element={<RegisterStep2 />} />
                <Route path="/step3/" element={<RegisterStep3 />} />
                <Route path="/step4/" element={<RegisterStep4 />} />
                <Route path="/step5/" element={<RegisterStep5 />} />
                <Route
                  path="/step6/"
                  element={<RegisterStep6 formValues={values} />}
                />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>Pagina inesistente </p>
                    </main>
                  }
                />
              </Routes>
            </Form>
          )}
        </Formik>
        <VerificaCodice
          isOpen={this.state.openModal}
          handleClick={this.handleClickModal}
          handleCodice={this.handleValueCodice}
        ></VerificaCodice>
      </div>
    );
  }
}
