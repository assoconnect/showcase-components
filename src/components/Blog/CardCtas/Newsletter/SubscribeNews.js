import React from 'react'
import InputBasic from '../../../Inputs/InputBasic'
import { Button, UI } from '../../../'
import styled from 'styled-components'
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import colors from '../../../../styles/colors'
import { formatMessage } from '../../../../utils/translations'

/**
 * Style
 */
const FormStyled = styled(Form)`
  text-align: center;
`
const InputButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`
const InputButtonWrapper = styled.div`
  max-width: 100%;
  position: relative;
  width: auto;
  flex-direction: column;

  > div {
    text-align: center;
  }
`
const InputButtonStyled = styled(InputBasic)`
  padding-right: 0;
  width: 100%;
  border: 0;
  border-radius: 0;
  border-bottom: solid 1px #fff;
  background: 0;
  .input {
    width: 100%;
    color: white;
  }
  .outline & {
    border: 1px solid ${colors.yellow};
  }
  .input::placeholder {
    color: white !important;
  }
  padding: 0.588rem;
`
const InputButtonSend = styled(Button)`
  vertical-align: middle;
  margin: 1.765rem auto auto auto;
  transition: background-color 0.3s;
  outline: none;
  text-transform: uppercase;
  border-radius: 21.5px;
  border: none;
  color: #316bf2;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  .button {
    height: 43px;
    width: 154px;
    background-color: #ffffff;
    padding: 0.647rem 1.1rem;
    transition: 0.3s;
    color: #316bf2;
    border: 1px solid ${colors.white};

    .outline & {
      border: 1px solid ${colors.white};
    }
    &:hover {
      background-color: transparent;
      border-color: ${colors.white};
      color: ${colors.white};
    }
  }
`
const ErrorMessageStyled = styled.div`
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.bold};
  color: #f4674a;
  margin-bottom: 5px;
`

const getHubspotBody = data => {
  const { email, referrer, page, pageUri, pageName } = data
  return JSON.stringify({
    fields: [
      {
        name: 'email',
        value: email,
      },
      {
        name: 'referrer',
        value: referrer,
      },
      {
        name: 'page',
        value: page,
      },
    ],
    context: {
      pageUri,
      pageName,
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: formatMessage('inputbutton_consent'),
      },
    },
  })
}

/**
 * Component
 */
const SubscribeNews = ({
  className,
  translations,
  href = 'https://app.assoconnect.com/sign-up',
  hubspotId,
}) => {
  const goToSignup = emailValue => {
    setTimeout(() => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        'email-passed': emailValue,
      })
      if (window.location.search.length || href.indexOf('?') !== -1) {
        if (window.location.search.length) {
          window.location.href = `${href}${window.location.search}&email=${emailValue}`
        } else {
          window.location.href = `${href}&email=${emailValue}`
        }
      } else {
        window.location.href = `${href}?email=${emailValue}`
      }
    }, 400)
  }

  const fetchHubspot = emailValue => {
    if (hubspotId) {
      fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/3038993/${hubspotId}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          method: 'POST',
          body: getHubspotBody({
            email: emailValue,
            referrer: document.referrer,
            page: document.title,
            pageUri: window.location.href,
            pageName: document.title,
          }),
        }
      )
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          goToSignup(emailValue)
        })
    } else {
      goToSignup(emailValue)
    }
  }

  /** Validation schema */
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required(formatMessage('inputbutton_validation_required', translations))
      .matches(
        /^([a-z0-9!#$%&'*+/=?^_`{|}~.(),:;<>@[\\\]-]+)$/i,
        formatMessage('inputbutton_validation_matches', translations)
      )
      .email(formatMessage('inputbutton_validation_email', translations)),
  })

  if (typeof window !== 'undefined') {
    return (
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={values => {
          fetchHubspot(values.email)
        }}
      >
        {() => (
          <FormStyled className={className}>
            <InputButtonContainer>
              <ErrorMessage name="email" component={ErrorMessageStyled} />
              <InputButtonWrapper className="button animation--start-hover">
                <InputButtonStyled
                  name="email"
                  type="email"
                  placeholder={formatMessage(
                    'inputbutton_placeholder_blog',
                    translations
                  )}
                />
                <InputButtonSend
                  type="submit"
                  theme="yellow"
                  size="big"
                  animationOff
                >
                  {formatMessage('inputbuttonNewsletter_text', translations)}
                </InputButtonSend>
              </InputButtonWrapper>
            </InputButtonContainer>
          </FormStyled>
        )}
      </Formik>
    )
  } else return null
}

export default SubscribeNews
