import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <span className="navigation-links1-text">{props.text4}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text: 'About',
  text3: 'Team',
  text2: 'Pricing',
  rootClassName: '',
  text1: 'Features',
  text4: 'Blog',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1
