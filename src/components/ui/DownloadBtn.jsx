import React, { memo } from 'react'
import '../ui/downloadBtn.css'
const DownloadBtn = () => {
  return (
    <div className='DownloadBtn'>
        <a href="akashpatelcv" download ><div>download <span>cv</span></div></a>
    </div>
  )
}

export default memo(DownloadBtn)