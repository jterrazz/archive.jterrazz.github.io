import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const WelcomeMessage = props => {
  const {t} = useTranslation();
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="small text-uppercase font-weight-500 text-muted">
        {t('welcomeMessageSubtitle')}
      </div>
      <h1 className="mb-4" dangerouslySetInnerHTML={{__html: t('welcomeMessageTitle')}}/>
      <Button variant="dark" className="rounded-pill font-weight-500 px-3" onClick={props.handleScrollToProjects}>{t('welcomeMessageWorkBtn')}</Button>
      <Link to="/contact">
        <Button variant="transparent" className="font-weight-500 p-3">{t('welcomeMessageContactBtn')}</Button>
      </Link>
    </div>
  )
}

export default WelcomeMessage
