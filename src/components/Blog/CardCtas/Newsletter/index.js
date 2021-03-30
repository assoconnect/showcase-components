import React from 'react'
import styled from 'styled-components'
import { Svg, Space, InputButton } from '../../..'
import { Wrapper, StyledHeader, Title, IconWrap, SubNews } from './styled.js'

const SvgStyled = styled(props => <Svg {...props} />)``
const Newsletter = ({
  hubspotId,
  mobile,
  title,
  subtitle,
  buttonHref,
  translations,
}) => {
  return (
    <Wrapper mobile={mobile}>
      <StyledHeader>
        <IconWrap>
          <SvgStyled
            src="components/blog/icons/blog-mail"
            width="40px"
            alt="mail icon"
          />
        </IconWrap>
        <Title>{title}</Title>
      </StyledHeader>
      <SubNews>{subtitle}</SubNews>

      <Space size="small" />
      <InputButton
        newsletter
        translations={translations}
        href={buttonHref}
        hubspotId={hubspotId}
      />
    </Wrapper>
  )
}

export default Newsletter
