import React, { useState } from 'react'
import InputBasic from './InputBasic'
import { Button, UI } from '../'
import styled from 'styled-components'
import colors from '../../styles/colors'
import { formatMessage } from '../../utils/translations'

/* Blog  */
const InputButtonWrapperBlog = styled.div`
  max-width: 100%;
  position: relative;
  width: auto;
  flex-direction: column;
  > div {
    text-align: center;
  }
`
const InputButtonStyledBlog = styled(InputBasic)`
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
const InputButtonSendBlog = styled(Button)`
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
const ErrorMessageBlog = styled.div`
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.bold};
  color: #f4674a;
  margin-bottom: 5px;
`

/**
 * Style
 */
const FormStyled = styled.form`
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
  height: 41px;

  .input {
    width: 100%;
  }
  .outline & {
    border: 1px solid ${colors.yellow};
  }
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    height: 44px;
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
    height: auto;
  }
  .button {
    height: 41px;
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
const ErrorMessage = styled.div`
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
  newsletter,
}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(null)

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

  const fetchHubspot = () => {
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
            email,
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
          goToSignup(email)
        })
    } else {
      goToSignup(email)
    }
  }

  const handleSubmit = event => {
    setEmailError('')
    // Errors
    if (!email) {
      setEmailError(
        formatMessage('inputbutton_validation_required', translations)
      )
      event.preventDefault()
      return
    }
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) === null
    ) {
      setEmailError(formatMessage('inputbutton_validation_email', translations))
      event.preventDefault()
      return
    }
    // Submit
    fetchHubspot()
  }

  const handleChange = event => {
    setEmailError('')
    setEmail(event.target.value)
  }

  return (
    <FormStyled className={className} onSubmit={handleSubmit}>
      {newsletter ? (
        <InputButtonContainer>
          {emailError && <ErrorMessageBlog>{emailError}</ErrorMessageBlog>}
          <InputButtonWrapperBlog className="button animation--start-hover">
            <InputButtonStyledBlog
              name="email"
              type="text"
              placeholder={formatMessage(
                'inputbutton_placeholder_blog',
                translations
              )}
              onChange={handleChange}
              value={email}
            />
            <InputButtonSendBlog
              type="submit"
              theme="yellow"
              size="big"
              animationOff
            >
              {formatMessage('inputbuttonNewsletter_text', translations)}
            </InputButtonSendBlog>
          </InputButtonWrapperBlog>
        </InputButtonContainer>
      ) : (
        <InputButtonContainer>
          {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
          <InputButtonWrapper className="button animation--start-hover">
            <InputButtonStyled
              name="email"
              type="text"
              placeholder={formatMessage(
                'inputbutton_placeholder',
                translations
              )}
              icon="common/icon/unicolor/paperplane"
              onChange={handleChange}
              value={email}
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
      )}
    </FormStyled>
  )
}

export default InputButton
