import React, { Children, createElement } from 'react'
import styled from 'styled-components'
import { Link, UI, Flex, Box, PricingCard, Svg } from '../../..'
import {
  Wrapper,
  StyledHeader,
  Title,
  IconWrap,
  SubNews,
  EmailInput,
  SubmitInpuWrap,
  SubmitInput,
} from './styled.js'
import { CardCtaButtonWrap, CardCtaButton } from '../../Reusables/styled'

const Newsletter = props => {
  return (
    <Wrapper mobile={props.mobile}>
      <StyledHeader>
        <IconWrap>
          <Svg src="components/blog/icons/blog-mail.svg" custom={false} />
        </IconWrap>
        <Title>{props.title}</Title>
      </StyledHeader>
      <SubNews>{props.subtitle}</SubNews>
      <EmailInput
        id="email-52694bb1-e344-4b79-9664-27ba056e2aae_6432"
        class="hs-input"
        type="email"
        name="email"
        required=""
        placeholder="Enter your email address "
        value=""
        autocomplete="email"
        data-reactid=".hbspt-forms-0.1:$0.$email.0"
      ></EmailInput>
      <CardCtaButtonWrap>
        <CardCtaButton
          className="white"
          type="submit"
          class="hs-button primary large"
          data-reactid=".hbspt-forms-0.5.1.0"
        >
          Sign up!
        </CardCtaButton>
      </CardCtaButtonWrap>
    </Wrapper>
  )
}

export default Newsletter
