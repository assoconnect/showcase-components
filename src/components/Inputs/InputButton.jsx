import React from 'react'
import InputBasic from './InputBasic'
import { Button, UI } from '../'
import styled from 'styled-components'
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import colors from '../../styles/colors'
import { formatMessage } from '../../utils/translations'

/**
 * Style
 */
const FormStyled = styled(Form)`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    text-align: center;
  }
`
const InputButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`
const InputButtonWrapper = styled.div`
  display: inline-flex;
  align-content: stretch;
  width: 550px;
  max-width: 100%;
  position: relative;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    width: auto;
    flex-direction: column;
  }
`
const InputButtonStyled = styled(InputBasic)`
  padding-right: 0;
  flex-grow: 3;
  .input {
    width: 100%;
  }
  .outline & {
    border: 1px solid ${colors.yellow};
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    padding: 0.588rem;
  }
  /* Desktop mode */
  @media screen and (min-width: ${UI.breakpoints.mobile}) {
    border-radius: 2.941rem 0 0 2.941rem;
  }
`
const InputButtonButton = styled(Button)`
  vertical-align: middle;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin-top: 1.765rem;
  }
  .button {
    padding: 0.647rem 1.1rem;
    transition: 0.3s;
    .outline & {
      border: 1px solid ${colors.yellow};
    }
    &:hover {
      background-color: #f9ac29;
      border-color: #f9ac29;
    }
    /* Desktop mode */
    @media screen and (min-width: ${UI.breakpoints.mobile}) {
      border-radius: 0 2.941rem 2.941rem 0;
      margin: 0;
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
const InputButton = ({
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
      window.location.href = `${href}${
        window.location.search.length ? `${window.location.search}&` : '?'
      }email=${emailValue}`
    }, 400)
  }

  const fetchHubspot = emailValue => {
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
                    'inputbutton_placeholder',
                    translations
                  )}
                  icon="common/icon/unicolor/paperplane"
                />
                <InputButtonButton
                  type="submit"
                  theme="yellow"
                  size="big"
                  animationOff
                >
                  {formatMessage('inputbutton_text', translations)}
                </InputButtonButton>
              </InputButtonWrapper>
            </InputButtonContainer>
          </FormStyled>
        )}
      </Formik>
    )
  } else return null
}

export default InputButton
