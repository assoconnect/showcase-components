import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { UI, Navigation } from '.'
import Footer from './Footer'
import { ThemeProvider } from 'styled-components'
import { formatMessage } from '../utils/translations'

const getUrlWithoutParams = (url) => url.split('?')[0]

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
      tagManagerId,
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

          <link
            rel="preconnect"
            href="https://web-assoconnect-frc-prod-cdn-endpoint-showcase.azureedge.net"
          />

          {richSnippets && (
            <script type="application/ld+json">{richSnippets}</script>
          )}

          {tagManagerId && (
            <script>
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${tagManagerId}');
              `}
            </script>
          )}
        </Helmet>
        {tagManagerId && (
          <noscript>
            {`
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${tagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            `}
          </noscript>
        )}

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

export default Layout
