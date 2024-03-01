import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <span className="navigation-links2-text">{props.text4}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text3: 'Contact',
  rootClassName: '',
  text2: 'Pricing',
  text1: 'Features',
  text: 'About',
  text4: 'Blog',
}

NavigationLinks2.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks2
