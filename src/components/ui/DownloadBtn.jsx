import React, { memo } from 'react'
import '../ui/downloadBtn.css'
import cv from "../../../public/Resume/AkashPatel.pdf"
const DownloadBtn = () => {
  return (
    <div className='DownloadBtn'>
        <a href={cv} download ><div>download <span>cv</span></div></a>
    </div>
  )
}

export default memo(DownloadBtn)