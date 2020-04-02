import React from 'react'
import Typed from 'typed.js'
import { checkSize } from '../../utils/validators'
import classNames from 'classnames/bind'

/**
 * Component
 */
class AnimationTyping extends React.Component {
  componentDidMount() {
    const { data } = this.props
    const validateData = data.map(str => checkSize(str, 50).response)
    const options = {
      strings: validateData,
      typeSpeed: 50,
      backSpeed: 50,
      loopCount: Infinity,
      loop: true,
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    const { className } = this.props
    return (
      <span
        ref={el => {
          this.el = el
        }}
        className={classNames(className)}
      />
    )
  }
}

export default AnimationTyping
