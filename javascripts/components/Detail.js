import React from 'react'
import PropTypes from 'prop-types'

const Detail = ({ title, value, text, link, btn }) => (
  <li>
    <span>{title}</span>
    {link && <a href={value} target="_blank">{value}</a>}
    {btn && <a href={value} target="_blank" className="btn">Download</a>}
    {text && <span>{value}</span>}
  </li>
)

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.boolean,
  link: PropTypes.boolean,
  btn: PropTypes.boolean,
}

Detail.defaultProps = {
  text: false,
  link: false,
  btn: false,
}

export default Detail
