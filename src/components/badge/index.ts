// indexts 组件导出

import { withInstall } from '@/utils'
import _Badge from './Badge.vue'

// 导出 组件
export const Badge = withInstall<typeof _Badge>(_Badge)
export default Badge
