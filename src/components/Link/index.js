import React from 'react'
import './link.scss'

const Link = ({title, ...props}) => {
  return (
    <div>
      <p className="link" {...props}>{title}</p>
    </div>
  )
}

export default Link
