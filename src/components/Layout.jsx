import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { UI, Navigation } from '.'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'

/**
 * Component
 */
class Layout extends Component {
  /**
   * Component did mount
   */
  componentDidMount() {
    const { meta } = this.props
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'page-viewed': meta.title,
    })

    if (this.context.mixpanel) {
      this.context.mixpanel.track('view.page')
    }
  }

  /**
   * Output
   */
  render() {
    const {
      children,
      meta: {
        title = 'AssoConnect',
        description,
        image = 'common/component/head/facebook-600x600',
      },
      navigationType = 'blue',
      noindex,
      preFooter,
      headerItems = [],
      footerColumns = [],
      cta = {
        network: {
          text: 'Placeholder',
          href: '/',
        },
        default: {
          text: 'Placeholder',
          href: '/',
        },
      },
      footerSocials = [],
      footerCopyrights = [],
      footerCta = {
        demo: {
          link: '/',
          text: <>Placeholder</>,
        },
        trial: {
          link: '/',
          text: <>Placeholder </>,
        },
      },
      translations,
    } = this.props
    return (
      <>
        <Helmet defer={false}>
          <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://showcase.azureedge.net" />
          <link rel="dns-prefetch" href="https://cdn.polyfill.io" />
          <meta charSet="utf-8" />
          {noindex && <meta name="robots" content="noindex,nofollow" />}
          {noindex && <meta name="googlebot" content="noindex,nofollow" />}

          <html lang="fr" />
          <meta charSet="utf-8" />
          <meta property="og:locale" content="fr_FR" />

          <meta property="og:type" content="website" />

          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="AssoConnect" />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} />

          <meta
            property="og:image"
            content={`${process.env.GATSBY_CDN_HOST}/${image}.png`}
          />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="261" />

          <link
            href="https://fonts.googleapis.com/css?family=Baloo|Caveat:400,700|Roboto:300,400,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <UI.GlobalStyle />
        <ThemeProvider
          theme={{
            breakpoints: [UI.breakpoints.mobile],
          }}
        >
          <main>
            <Navigation
              type={navigationType}
              cta={cta}
              items={headerItems}
              translations={translations}
            />
            {children}
            <Footer
              columns={footerColumns}
              copyrights={footerCopyrights}
              cta={footerCta}
              preFooter={preFooter}
              socials={footerSocials}
              translations={translations}
            />
          </main>
        </ThemeProvider>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.contextTypes = {
  mixpanel: PropTypes.object.isRequired,
}

export default Layout
