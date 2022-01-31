import React from 'react'

const Svg = ({
  embed = true,
  develop = false,
  locale = 'en',
  className = 'freesewing pattern',
  style = {},
  viewBox = false,
  width,
  height,
  children,
  xray=false
}) => {
  let attributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:svg': 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    xmlLang: locale,
    viewBox: viewBox
      ? viewBox
      : xray
      ? `-25 -25 ${width+50} ${height+50}`
      : `0 0 ${width} ${height}`,
    className,
    style
  }

  if (!embed) {
    attributes.width = width + 'mm'
    attributes.height = height + 'mm'
  }
  if (develop) attributes.className += ' develop'

  return <svg {...attributes}>{children}</svg>
}

export default Svg
