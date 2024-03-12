import { TextField, Grid, Box } from '@mui/material'
import { useState, forwardRef, useImperativeHandle } from 'react'

/**
 * @param desc 左侧的描述 例如 '描述:'
 * @param value 初始值
 * @param required 必填
 * @param errMessage 必填提示
 * @param forceWarn 强制warn 当内容变动后 强制失效。 通常用于父控件调用
 */
let LineEditWithWarn = forwardRef(({ desc, value, required, errMessage = '必须填写', forceWarn = false, ...other }, ref) => {
  let [v, setV] = useState(value)
  let [used, setUsed] = useState(false)
  let [warnOnce, setWarnOnce] = useState(forceWarn)

  // 对外开放的函数
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return v
    },
    setValue: (a_v) => {
      setV(a_v)
      setUsed(false)
    },
    // 强制warn一次
    // 父控件调用 当值修改后本次强制warn消失
    warnOnce: () => {
      setWarnOnce(true)
    }
  }))

  let handleChange = (e) => {
    setUsed(true)
    setWarnOnce(false)
    setV(e.target.value)
  }

  let main = (<>
    <TextField
      size='small'
      error={warnOnce || (required && used && v.length === 0)}
      helperText={((warnOnce || (required && used && v.length) === 0) ? errMessage : null)}
      value={v}
      onChange={handleChange}
      {...other} />
  </>)

  // console.log(v)
  if (desc) {
    return (<>
      <Grid item xs={3} textAlign={'right'}><Box sx={{ paddingTop: '9px' }}>{desc}</Box></Grid>
      <Grid item xs={9} textAlign={'center'}>
        {main}
      </Grid>
    </>)
  } else {
    return main
  }

})

export default LineEditWithWarn
