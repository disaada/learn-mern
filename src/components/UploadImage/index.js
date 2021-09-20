import React from 'react'
import './upload-image.scss'
import {LoginBg} from '@assets'

const UploadImage = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="" />
      <input type="file" />
    </div>
  )
}

export default UploadImage
