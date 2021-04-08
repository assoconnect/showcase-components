import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { UI, Navigation } from '.'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import { formatMessage } from '../utils/translations'
import '../fonts/stylesheet.css'

const getUrlWithoutParams = url => url.split('?')[0]

/**
 * Component
 */
class Layout extends Component {
  /**
   * Component did mount
   */
  componentDidMount() {
    const { meta, mixpanelEvent = 'view.page' } = this.props
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'page-viewed': meta.title,
    })

    if (this.context.mixpanel) {
      this.context.mixpanel.track(mixpanelEvent)
    }
  }

  getMetaImage = () => {
    const {
      meta: { image },
      translations,
    } = this.props
    if (!image) {
      return `${process.env.GATSBY_CDN_HOST}/components/head/${formatMessage(
        'site_name',
        translations
      )}-600x600`
    }
    if (image.search('http') !== -1) {
      return image
    }
    return `${process.env.GATSBY_CDN_HOST}/${image}.png`
  }

  /**
   * Output
   */
  render() {
    const {
      hreflangs = [],
      canonical,
      children,
      meta: { title = 'AssoConnect', description },
      noindex,
      preFooter,
      headerBackgroundColor = 'blue',
      headerItems = [],
      footerColumns = [],
      navigationButtons = [],
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
      homePath,
      lang = 'fr',
      richSnippets,
    } = this.props

    const url =
      canonical ||
      (typeof window !== 'undefined'
        ? getUrlWithoutParams(window.location.href)
        : '')

    return (
      <>
        <Helmet defer={false}>
          {hreflangs.map((hreflang, i) => (
            <link
              key={i}
              rel="alternate"
              href={hreflang.href}
              hreflang={hreflang.lang}
            />
          ))}
          <link rel="canonical" href={url} />
          <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://showcase.azureedge.net" />
          <link rel="dns-prefetch" href="https://cdn.polyfill.io" />
          <meta charSet="utf-8" />
          {noindex && <meta name="robots" content="noindex,nofollow" />}
          {noindex && <meta name="googlebot" content="noindex,nofollow" />}

          <html lang={lang} />
          <meta charSet="utf-8" />
          <meta property="og:locale" content="fr_FR" />

          <meta property="og:type" content="website" />

          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta
            property="og:site_name"
            content={formatMessage('site_name_human', translations)}
          />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} />

          <meta property="og:image" content={this.getMetaImage()} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />

          {richSnippets && (
            <script type="application/ld+json">{richSnippets}</script>
          )}
        </Helmet>
        <UI.GlobalStyle />
        <ThemeProvider
          theme={{
            breakpoints: [UI.breakpoints.mobile],
          }}
        >
          <main>
            <Navigation
              navigationButtons={navigationButtons}
              items={headerItems}
              homePath={homePath || '/'}
              headerBackgroundColor={headerBackgroundColor}
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
