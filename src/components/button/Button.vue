<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { ButtonProps } from './Button.type'
import { computed } from 'vue'
import { useBem } from '@/hooks'
import { defaultLoading } from '@/utils'
import FIcon from '../icon/Icon.vue'

// 组件名称
const componentName = 'f-button'
defineOptions({ name: componentName })

// 属性
const {
  type = 'default',
  size = 'normal',
  nativeType = 'button',
  iconPosition = 'left',
  ...ps
} = defineProps<ButtonProps>()

// 事件
const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function onClick(event: MouseEvent) {
  if (!ps.disabled && !ps.loading) {
    emit('click', event)
  }
}

// bem类名
const { bem, e } = useBem(componentName)
const bemRoot = bem({
  b: '',
  m: ['type', 'size'],
  is: ['block', 'plain', 'link', 'square', 'round', 'circle', 'mono', 'color', 'disabled', 'loading'],
}, computed(() => ({ type, size, ...ps })))

const bemText = bem({ e: 'text' })

const getStyle = computed(() => {
  const { color, plain } = ps
  let style: CSSProperties = {}
  const base: CSSProperties = { borderColor: color }
  if (!color)
    return style

  style = plain ? { color } : { color: '#fff', background: color }
  return { ...base, ...style }
})

const iconVal = computed(() => {
  const { loading, icon } = ps
  return loading ? defaultLoading : icon || ''
})

const isIcon = computed(() => ps.icon || ps.loading)
const isDisaled = computed(() => ps.disabled || ps.loading)
const isText = computed(() => ps.text && !ps.circle)
const shoSlot = computed(() => !ps.circle && !ps.mono)

// TODO 防止部分浏览器选中文字, 华为浏览器等 增加浮层?
</script>

<template>
  <button
    :class="bemRoot"
    :style="getStyle"
    :disabled="isDisaled"
    :type="nativeType"
    oncontextmenu="return false"
    @click="onClick"
  >
    <div :class="e('content')">
      <FIcon v-if="isIcon && iconPosition === 'left'" :class="e(['icon', `&--${iconPosition}`])" :rotate="loading" :name="iconVal" :size="iconSize" />
      <span v-if="isText" :class="bemText">{{ text }}</span>
      <span v-else-if="shoSlot && $slots.default" :class="bemText">
        <slot />
      </span>
      <FIcon v-if="isIcon && iconPosition === 'right'" :class="e(['icon', `&--${iconPosition}`])" :rotate="loading" :name="iconVal" :size="iconSize" />
    </div>
  </button>
</template>

<style lang="css">
@import './style.scss';
</style>
