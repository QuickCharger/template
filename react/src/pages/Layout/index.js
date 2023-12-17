import TemplateClipped from './Template_Clipped'
import TemplateResponsive from './Template_Responsive'
import TemplatePersistent from './Template_Persistent'

import { useState, useEffect } from 'react'

export {
  TemplateClipped, TemplateResponsive, TemplatePersistent
}

/**
 * 
 * @param main  主文本内容
 * @param theme 'clipped' | 'responsive' | 'persistent'  默认'clipped'
 * @param useTheme 用户自主选择主题 使用useEffect 会导致页面载入两次！！！
 */
export function Template ({ theme = 'persistent', ...other }) {
  theme = ['clipped', 'responsive', 'persistent'].indexOf(theme) === -1 ? 'clipped' : theme
  let [templateName, setTemplateName] = useState(theme)

  if (templateName === 'clipped') {             // 上方100%
    return <TemplateClipped {...other} />
  } else if (templateName === 'responsive') {   // 左侧100%
    return <TemplateResponsive {...other} />
  } else if (templateName === 'persistent') {   // 带折叠
    return <TemplatePersistent {...other} />
  }
}
