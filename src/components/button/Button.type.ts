import type { FDD } from '@/types/global'

export interface ButtonProps {
  /** 按钮类型 @default default */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /** 原生 button 标签的 type 属性 @default button */
  nativeType?: 'button' | 'submit' | 'reset'
  /** 是否为朴素按钮 */
  plain?: boolean
  /** 是否为链接按钮 */
  link?: boolean
  /** 按钮尺寸 @default normal */
  size?: FDD.SizeWithMini
  /** 按钮文字 */
  text?: string
  /** 按钮颜色 */
  color?: string
  /** 是否为块级元素 */
  block?: boolean
  /** 是否为方形按钮 */
  square?: boolean
  /** 是否为圆角按钮 */
  round?: boolean
  /** 是否为圆形按钮 */
  circle?: boolean
  /** 是否为图标按钮 等宽 */
  mono?: boolean
  /** 是否禁用按钮 */
  disabled?: boolean
  /** 是否显示为加载状态 */
  loading?: boolean
  /** 左侧图标 等同于 Icon 组件的 name 属性 */
  icon?: string
  /** 图标大小，指定任意CSS单位 */
  iconSize?: number | string
  /** 图标展示位置 @default left */
  iconPosition?: 'left' | 'right'
}

export interface Events {
  /** 点击按钮，且按钮状态不为加载或禁用时触发 */
  click: MouseEvent
}

export interface Slots {
  /** 按钮内容 */
  default: string
  /** 自定义图标 */
  icon: string
}
