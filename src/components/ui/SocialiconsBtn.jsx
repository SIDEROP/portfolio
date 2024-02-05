import { memo } from 'react'
import '../ui/socialiconsBtn.css'

const SocialiconsBtn = ({iconName,iconCls,iconLink}) => {
  return (
    <div className="icon_box">
      <a href={iconLink}>
          <i className={iconCls}></i>
      </a>
      <span id='okk' className='ico_'>{iconName}</span>
    </div>
  )
}

export default memo(SocialiconsBtn)