export interface Props {
  /** 是否展示为小红点 */
  dot?: boolean
  /** 徽标内容 @default undefined */
  content?: number | string
  /** 自定义背景颜色 */
  color?: string
  /** 最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效 @default 99 */
  max?: number
  /** 设置徽标的偏移量，[top,right,bottom,left] */
  offset?: [number, number, number, number]
  /** 当 content 为数字 0 或字符串 '0' 时，是否展示徽标 @default false */
  showZero?: boolean
  /** 徽标水平位置 @default right */
  x?: 'left' | 'right'
  /** 作为行内元素,不使用绝对定位,独立展示 @default false */
  inline?: boolean
}
