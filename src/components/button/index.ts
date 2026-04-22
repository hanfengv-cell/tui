import { withInstall } from '@/utils'
import _Button from './Button.vue'

// 导出 组件
export const Button = withInstall<typeof _Button>(_Button)
export default Button
