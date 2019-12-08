import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Formik } from 'formik';
import firebaseApi from "../../services/firebase";

// https://react-bootstrap.github.io/components/forms/#forms-validation-libraries
const ContactPage = props => {
  const [validated, setValidated] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async formData => {
    if (messageSent) return;
    await firebaseApi.postContactForm(formData)
    setMessageSent(true)
  }

  return (
    <Container className="flex-fill">
      <h1>{t('contactTitle')}</h1>

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                  <Form.Group controlId="fullName">
                    <Form.Label>{t('contactInputName')}</Form.Label>
                    <Form.Control type="text" placeholder={t('contactInputPlaceholderName')}
                                  onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="message">
                    <Form.Label>{t('contactInputMessage')}</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder={t('contactInputPlaceholderMessage')} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>{t('contactInputEmail')}</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder={t('contactInputPlaceholderEmail')}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    {t('contactSubmitButton')}
                  </Button>
                </Form>
              )}
            </Formik>
          );
        </Col>

        <Col>
          <h2>{t('contactReachMeTitle')}</h2>
          <ul>
            <li>Messenger</li>
            <li>LinkedIn</li>
            <li>jterrazz@protonmail.com</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactPage
