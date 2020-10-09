import React, { useEffect } from 'react'
/**
 * Component
 */
const Outgrow = ({ id, title }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => {
      window.initIframe(id)
    }
  }, [id])
  return (
    <div
      className="op-interactive"
      id={id}
      data-title={title}
      data-url={`https://asso.outgrow.us/${id}?vHeight=1`}
      data-width="100%"
    ></div>
  )
}
export default Outgrow
