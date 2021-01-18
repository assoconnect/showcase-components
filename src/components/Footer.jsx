import React from 'react'
import {
  UI,
  Link,
  Svg,
  Flex,
  Space,
  Section,
  Box,
  MiddleTitle,
  ButtonLink,
} from '.'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'
import { formatMessage } from '../utils/translations'

/**
 * Style
 */
const FooterSocialWrapper = styled.div`
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
  }
`
const FooterSocial = styled(props => <Svg {...props} />)`
  margin: 2px 2.7px;
  display: inline-block;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    svg {
      width: 2rem;
      height: 2rem;
    }
    margin: 0;
  }
`
const FooterLogoAssoconnect = styled(props => <Svg {...props} />)`
  margin: 2px;
  margin-bottom: 0.5rem;
  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    svg {
      width: 8.5rem;
    }
    margin-left: auto;
    margin-right: auto;
  }
`
const FooterInner = styled(props => <Flex {...props} />)`
  max-width: ${UI.widthBoxed}px;
  display: inline-block;
  width: 100%;
  text-align: left;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    max-width: 17.647rem;
    width: 90%;
    text-align: center;
  }
`
const FooterCopyright = styled.p`
  text-align: center;
  margin: 1rem;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    margin: 0;
  }
`
const FooterStyled = styled.footer`
  font-family: ${UI.fonts.family.roboto};
  font-weight: ${UI.fonts.weight.light};
  font-size: 0.824rem;
  color: ${UI.colors.white};
  padding: 1rem 30px;
  background-color: ${UI.colors.darkBlue};
  position: relative;
  z-index: 10;
  text-align: center;
  background: linear-gradient(to bottom, #00174d, #011e62 11.765rem);

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`
const FooterTitle = styled.li`
  text-transform: uppercase;
  margin: 1rem 0;
  text-align: left;

  /* Mobile mode */
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`
const FooterWave = styled(props => <Svg {...props} />)`
  display: block;
  position: absolute;
  bottom: calc(100% - 1px);
  left: 0;
  z-index: -1;
  pointer-events: none;
`
const FooterLink = styled(props => <Link {...props} />)`
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`
const FooterArrow = styled(props => (
  <Svg src="common/icon/unicolor/arrow" {...props} />
))`
  footer & {
    transition: 0.3s;

    &.footer__section--open {
      transform: rotate(90deg);
    }
  }
`
const FooterList = styled.li`
  text-align: left;
  @media screen and (max-width: ${UI.breakpoints.mobile}) {
    line-height: 48px;
  }
`
const FooterLanguageSwitch = styled(props => <select {...props} />)`
  border-radius: 4px;
  padding: 5px 20px 5px 5px;
  font-size: 14px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  margin: 14px 0 2px;
`
const FooterLanguageSwitchOption = styled(props => <option {...props} />)`
  color: #626262;
  background: #fff;
  transition: 0.3s ease;
  min-height: 29px;
`

/**
 * Component used
 */
class AnimationFooter extends React.Component {
  state = {
    height: 0,
  }

  render() {
    return (
      <ul>
        <FooterTitle onClick={this.toggle}>
          {this.props.title}
          <FooterArrow
            width="10px"
            color="white"
            className={
              this.state.height === 0
                ? 'footer__section--close'
                : 'footer__section--open'
            }
          />
        </FooterTitle>
        <AnimateHeight height={this.state.height}>
          {this.props.items.map((field, i) => (
            <FooterList key={i}>
              <FooterLink
                href={field.href}
                externalLink={field.externalLink ? true : false}
                isStyled={false}
              >
                {field.text}
              </FooterLink>
            </FooterList>
          ))}
        </AnimateHeight>
      </ul>
    )
  }

  toggle = () => {
    const { height } = this.state

    this.setState({ height: height === 0 ? 'auto' : 0 })
  }
}

/**
 * Component
 */
const Footer = ({
  columns,
  copyrights,
  cta,
  preFooter,
  socials,
  translations,
}) => (
  <>
    {preFooter && (
      <Section wave={{ color: 'blue' }}>
        <Box width={1}>
          <MiddleTitle>
            {formatMessage('footer_ready', translations)}
          </MiddleTitle>
          <Space size="big" />
        </Box>
        <Box width={1 / 2} align="right">
          <ButtonLink align="center" href={cta.trial.link}>
            {cta.trial.text}
          </ButtonLink>
          <Space size="small" className="hidden-desktop" />
        </Box>
        <Box width={1 / 2}>
          <ButtonLink align="center" href={cta.demo.link} theme="white">
            {cta.demo.text}
          </ButtonLink>
        </Box>
        <Box width={1}>
          <Space size="medium" />
        </Box>
      </Section>
    )}
    <FooterStyled>
      <FooterWave
        width="110vw"
        height="auto"
        color="extraDarkBlue"
        src="components/footer/footer-wave"
      />
      <FooterInner>
        <Space size="medium" className="hidden-desktop" />
        <FooterLogoAssoconnect
          color="white"
          width="7.059rem"
          height="auto"
          src={`common/logo/${formatMessage('site_name', translations)}`}
        />
        <Space size="medium" className="hidden-desktop" />
        <FooterSocialWrapper>
          {socials.map((social, i) => (
            <FooterLink href={social.href} key={i} isStyled={false}>
              <FooterSocial width="1.176rem" color="white" src={social.icon} />
            </FooterLink>
          ))}
        </FooterSocialWrapper>

        <FooterLanguageSwitch
          value={formatMessage('site_url', translations)}
          onChange={event => {
            window.location.href = event.target.value
          }}
        >
          <FooterLanguageSwitchOption value="https://www.springly.org/en-us/">
            English (USA)
          </FooterLanguageSwitchOption>
          <FooterLanguageSwitchOption value="https://www.assoconnect.com/">
            France
          </FooterLanguageSwitchOption>
        </FooterLanguageSwitch>

        <Flex justifyContent="space-between" className="hidden-mobile">
          {columns.map((footerColumn, i) => (
            <ul key={i}>
              <FooterTitle>{footerColumn.title}</FooterTitle>
              {footerColumn.items.map((field, i) => (
                <li key={i}>
                  <FooterLink
                    href={field.href}
                    nofollow={field.nofollow}
                    isStyled={false}
                  >
                    {field.text}
                  </FooterLink>
                </li>
              ))}
            </ul>
          ))}
        </Flex>

        <div className="hidden-desktop">
          <Space size="medium" />
          {columns.map((footerColumn, i) => (
            <AnimationFooter {...footerColumn} key={i} />
          ))}
          <Space size="medium" />
        </div>

        <FooterCopyright>
          {formatMessage('footer_copyright', translations)}
          {copyrights.map((copyright, i) => (
            <>
              <span>{` • `}</span>
              <FooterLink href={copyright.href} isStyled={false}>
                {copyright.text}
              </FooterLink>
            </>
          ))}
        </FooterCopyright>
      </FooterInner>
    </FooterStyled>
  </>
)

export default Footer
