import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links4.css'

const NavigationLinks4 = (props) => {
  return (
    <nav className={`navigation-links4-nav ${props.rootClassName} `}>
      <span className="navigation-links4-text">{props.text}</span>
      <span className="navigation-links4-text1">{props.text1}</span>
      <span className="navigation-links4-text2">{props.text2}</span>
      <span className="navigation-links4-text3">{props.text4}</span>
    </nav>
  )
}

NavigationLinks4.defaultProps = {
  text: 'Contact',
  text1: 'Free things',
  text3: 'Team',
  text4: 'Blog',
  rootClassName: '',
  text2: 'Shortlink',
}

NavigationLinks4.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks4
