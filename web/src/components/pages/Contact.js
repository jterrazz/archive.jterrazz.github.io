import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useTranslation} from "react-i18next";
import {Formik} from 'formik';
import firebaseApi from "../../services/firebase";
import config from "../../config";

// https://react-bootstrap.github.io/components/forms/#forms-validation-libraries
const ContactPage = props => {
  const [messageSent, setMessageSent] = useState(false);
  const {t} = useTranslation();

  const onSubmit = async formData => {
    if (messageSent) return;
    await firebaseApi.postContactForm(formData)
    setMessageSent(true)
  }

  return (
    <Container className="flex-fill pb-5" id="contact-page">
      <Row className="py-5">
        <Col className="d-flex align-items-center">
          <h1 className="font-weight-700">{t('contactTitle')}</h1>
        </Col>
        <Col>
          <img src="/images/working-man.png" alt="working man" width={500}/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Formik
            // validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{}}
          >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
              <Form noValidate onSubmit={handleSubmit}>

                <Form.Group controlId="fullName">
                  <Form.Label>{t('contactInputName')}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t('contactInputPlaceholderName')}
                    className="rounded-0"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>{t('contactInputMessage')}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder={t('contactInputPlaceholderMessage')}
                    onChange={handleChange}
                    className="rounded-0"
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>{t('contactInputEmail')}</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder={t('contactInputPlaceholderEmail')}
                    onChange={handleChange}
                    className="rounded-0"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="dark"
                  type="submit"
                  className="w-100 rounded-0"
                >
                  {t('contactSubmitButton')}
                </Button>
              </Form>
            )}
          </Formik>
          { messageSent &&
          <p className="text-success text-center font-weight-500 p-2">Message sent !</p>
          }
        </Col>

        <Col>
          <p className="font-italic m-0">{t('contactReachMeTitle')} at </p>
          <p className="text-uppercase font-weight-bold mb-5"><a href={"mailto:" + config.email} className="text-dark">{config.email}</a></p>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactPage
